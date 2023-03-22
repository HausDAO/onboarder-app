import { useDHConnect } from "@daohaus/connect";
import { TARGET_DAO } from "../targetDao";
import {
  Banner,
  Card,
  DataIndicator,
  Divider,
  H2,
  ParLg,
  ParMd,
  ParSm,
  SingleColumnLayout,
  Spinner,
  Theme,
  Tooltip,
  useToast,
} from "@daohaus/ui";
import { useUserMember } from "../hooks/useUserMember";
import { useState } from "react";
import { useTxBuilder } from "@daohaus/tx-builder";
import { MaxUint256 } from "@ethersproject/constants";
import { APP_TX } from "../legos/tx";
import {
  formatDistanceToNowFromSeconds,
  formatValueTo,
  fromWei,
  handleErrorMessage,
  toBaseUnits,
  TXLego,
} from "@daohaus/utils";
import styled from "styled-components";
import { useOnboarder } from "../hooks/useOnboarder";
import { Member } from "../utils/types";
import { StakeTokenSection } from "../components/StakeTokenSection";
import { DataGrid } from "../components/DataGrid";
import { MembershipSection } from "../components/MembershipSection";
import { StakeEthSection } from "../components/StakeEthSection";
import { useETH } from "../hooks/useETH";
import { useDaoData } from "../hooks/useDaoData";

const StakeBox = styled.div`
  max-width: 70rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 2rem;
  }
  .space {
    margin-bottom: 2rem;
  }
  .small-space {
    margin-bottom: 1rem;
  }
  svg {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 4rem;
  }
  label {
    margin-bottom: 1rem;
  }
  .input-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
  }
  .err {
    margin-top: 1rem;
    color: ${({ theme }: { theme: Theme }) => theme.danger.step9};
  }
`;

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Join = () => {
  const { address, provider } = useDHConnect();
  const { fireTransaction } = useTxBuilder();
  const { dao } = useDaoData({
    daoid: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS,
    daochain: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
  });
  console.log("dao", dao);

  const {
    tokenData,
    isLoading: isTokenLoading,
    isRefetching,
    refetch: refetchToken,
  } = useETH({
    chainId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
    userAddress: address,
    provider: provider,
    fetchShape: {
      balanceOf: true,
    },
  });
  const { shamanData, isLoading: isShamanLoading } = useOnboarder({
    shamanAddress: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].SHAMAN_ADDRESS,
    chainId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
    fetchShape: {
      expiry: true,
      minTribute: true,
    },
  });
  const {
    user,
    isLoading: isUserLoading,
    refetch: refetchUser,
  } = useUserMember({
    daoId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS,
    chainId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
    memberAddress: address,
  });
  const { balance } = tokenData || {};
  const { expiry, minTribute } = shamanData || {};

  console.log("user", user);

  const [isLoadingTx, setIsLoadingTx] = useState(false);
  const { successToast, errorToast, defaultToast } = useToast();

  const isLoadingAll = isTokenLoading || isUserLoading;

  const handleStake = (wholeAmt: string) => {
    if (!wholeAmt) {
      errorToast({ title: "Error", description: "Please enter an amount" });
      return;
    }
    const baseAmt = toBaseUnits(
      wholeAmt,
      TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_DECIMALS
    ).toString();

    fireTransaction({
      tx: {
        ...APP_TX.STAKE,
        staticArgs: [],
        overrides: { value: baseAmt },
      } as TXLego,
      lifeCycleFns: {
        onRequestSign() {
          setIsLoadingTx(true);
        },
        onTxSuccess() {
          defaultToast({
            title: "Success",
            description: "Transaction submitted: Syncing data on Subgraph",
          });
          refetchUser();
        },
        onTxError(err) {
          const errMsg = handleErrorMessage(err as any);
          errorToast({ title: "Error", description: errMsg });
          setIsLoadingTx(false);
        },
        onPollSuccess() {
          setIsLoadingTx(false);
          successToast({
            title: "Success",
            description: `Staked ${
              TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL
            } for DAO Shares`,
          });
          refetchUser();
          refetchToken();
        },
        onPollError(err) {
          const errMsg = handleErrorMessage(err as any);
          errorToast({ title: "Error", description: errMsg });
          setIsLoadingTx(false);
        },
      },
    });
  };

  if (isLoadingAll)
    return (
      <SingleColumnLayout>
        <StakeBox>
          <H2>Loading</H2>
          <ParMd className="space">
            Fetching Data from RPC. Load times may be longer than usual.{" "}
          </ParMd>
          <SpinnerBox>
            <Spinner size="12rem" />
          </SpinnerBox>
        </StakeBox>
      </SingleColumnLayout>
    );
  return (
    <SingleColumnLayout>
      <StakeBox>
        <H2>Fund Yeet</H2>
        <ParLg>
          Target Threshold
          <Tooltip content="Funds above threshold will go to PublicHAUS maintnenace fund eco.daohaus.eth" />
        </ParLg>
        <DataGrid>
          <TargetThresholdIndicator
            target={
              TARGET_DAO[import.meta.env.VITE_TARGET_KEY].TARGET_THRESHOLD
            }
          />
          {dao && <DAOEthIndicator dao={dao} />}
        </DataGrid>
        <Divider className="space" />
        <ParLg>
          Stake {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL}{" "}
          to Join
          <Tooltip content="1% commitment fee goes to PublicHAUS maintnenace fund eco.daohaus.eth" />
        </ParLg>
        <ParSm>Fund the project and keep custody.</ParSm>

        <DataGrid>
          <DataIndicator label="Stake Ratio:" data={`1:10`} size="sm" />

          <DataIndicator label="Fee:" data={`1%`} size="sm" />
          {expiry && <ExpiryIndicator expiry={expiry} />}
          {minTribute && <MinTributeIndicator minTribute={minTribute} />}
        </DataGrid>
        <Divider className="space" />
        <MembershipSection user={user as Member | null} balance={balance} />
        {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_PAUSED ? (
          <Card className="space">
            <ParMd>Staking is currently paused. Please check back later.</ParMd>
          </Card>
        ) : (
          <StakeEthSection
            balance={balance}
            handleStake={handleStake}
            isLoading={isLoadingTx || isRefetching}
          />
        )}
      </StakeBox>
    </SingleColumnLayout>
  );
};

const ExpiryIndicator = ({ expiry }: { expiry: string }) => {
  const expiryDate = formatDistanceToNowFromSeconds(expiry);
  return (
    <DataIndicator label="Open Staking Expires:" data={expiryDate} size="sm" />
  );
};

const TargetThresholdIndicator = ({ target }: { target: string }) => {
  const targetThreshold = formatValueTo({
    value: fromWei(target),
    format: "numberShort",
  });
  return (
    <DataIndicator label="Target Raise:" data={targetThreshold} size="sm" />
  );
};

const DAOEthIndicator = ({ dao }: { dao: any }) => {
  const daoBalance = formatValueTo({
    value: fromWei(dao.vaults[0].tokenBalances[0].balance),
    format: "numberShort",
  });
  return <DataIndicator label="Current:" data={daoBalance} size="sm" />;
};

const MinTributeIndicator = ({ minTribute }: { minTribute: string }) => {
  const minTributeEth = formatValueTo({
    value: fromWei(minTribute),
    format: "numberShort",
  });
  return <DataIndicator label="Min Tribute:" data={minTributeEth} size="sm" />;
};
