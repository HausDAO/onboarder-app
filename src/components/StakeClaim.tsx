import { useDHConnect } from "@daohaus/connect";
import { useTxBuilder } from "@daohaus/tx-builder";
import {
  Button,
  H3,
  ParMd,
  SingleColumnLayout,
  Spinner,
  useToast,
} from "@daohaus/ui";
import { formatDistanceToNowFromSeconds, handleErrorMessage, toWholeUnits, TXLego } from "@daohaus/utils";
import React, { useState } from "react";
import { useStakeClaim } from "../hooks/useStakeClaim";
import { APP_TX } from "../legos/tx";
import { TARGET_DAO } from "../targetDao";

export const StakeClaim = ({
  address,
  contractAddress,
  chainId,
  label,
}: {
  address: string;
  contractAddress: string;
  chainId: string | null | undefined;
  label: string;
}) => {
  const { fireTransaction } = useTxBuilder();
  const [isLoadingTx, setIsLoadingTx] = useState(false);
  const { successToast, errorToast, defaultToast } = useToast();

  const {
    StakeClaimData,
    isLoading: isStakeClaimLoading,
    isError,
  } = useStakeClaim({
    contractAddress: contractAddress,
    userAddress: address || "",
    chainId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
  });

  const handleStakeClaim = () => {
    fireTransaction({
      tx: {
        ...APP_TX.STAKECLAIM,
        staticArgs: [],
      } as TXLego,
      callerState: { contractAddress },
      lifeCycleFns: {
        onRequestSign() {
          setIsLoadingTx(true);
        },
        onTxSuccess() {
          defaultToast({
            title: "Success",
            description: "Transaction submitted: Syncing data on Subgraph",
          });
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
            description: `Staked for DAO Shares`,
          });
        },
        onPollError(err) {
          const errMsg = handleErrorMessage(err as any);
          errorToast({ title: "Error", description: errMsg });
          setIsLoadingTx(false);
        },
      },
    });
  };

  if (isStakeClaimLoading) {
    return (
      <SingleColumnLayout>
        <Spinner size="12rem" />
        <ParMd>Checking {label}...</ParMd>
      </SingleColumnLayout>
    );
  }
  if (isError) {
    return (
      <SingleColumnLayout>
        <ParMd>Coming Soon {label}...</ParMd>
      </SingleColumnLayout>
    );
  }
  if (
    StakeClaimData?.expiery &&
    parseInt(StakeClaimData.expiery) == 0
  ) {
    return (
      <SingleColumnLayout>
        <ParMd>{label}: Not Active...</ParMd>
      </SingleColumnLayout>
    );
  }
  if (
    StakeClaimData?.expiery &&
    parseInt(StakeClaimData.expiery) < Math.floor(Date.now() / 1000)
  ) {
    return (
      <SingleColumnLayout>
        <ParMd>{label}: Expired...</ParMd>
      </SingleColumnLayout>
    );
  }
  return (
    <>
      {StakeClaimData?.claim && parseInt(StakeClaimData.claim) > 0 ? (
        <SingleColumnLayout>
          <H3>{label}</H3>
          <ParMd>You have unclaimed tokens that can be claimed</ParMd>
          <ParMd>Will automatically be staked in Publichaus</ParMd>
          <ParMd>Claim: {toWholeUnits((parseInt(StakeClaimData?.claim) * 10).toString())} PUB</ParMd>
          {StakeClaimData?.expiery && <ParMd>Expires: {formatDistanceToNowFromSeconds(StakeClaimData.expiery)}</ParMd>}
          <Button type="button" onClick={handleStakeClaim} disabled={chainId != TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID}>
            Stake Claim
          </Button>
        </SingleColumnLayout>
      ) : (
        <SingleColumnLayout>
          <ParMd>{label}: currently not eligible</ParMd>
        </SingleColumnLayout>
      )}
    </>
  );
};
