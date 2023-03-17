import { useDHConnect } from "@daohaus/connect";
import { H2, ParMd, SingleColumnLayout, Spinner } from "@daohaus/ui";
import { StakeClaim } from "../components/StakeClaim";
import { V2DAOClaim } from "../components/V2DAOClaim";
import { TARGET_DAO } from "../targetDao";

export const Claim = () => {
  const { address, chainId } = useDHConnect();

  if (!address) {
    return (
      <SingleColumnLayout>
        <ParMd>Please connect your wallet to view your claims.</ParMd>
      </SingleColumnLayout>
    );
  }

  return (
    <SingleColumnLayout>
      <H2>Claims</H2>
      <ParMd style={{ marginTop: "5em" }}>
        This is where you will find your retroactive claim for a successful yeet
      </ParMd>

      <ParMd style={{ marginTop: "5em" }}>
        <strong>Check back soon for more special claim events</strong>
      </ParMd>
    </SingleColumnLayout>
  );
};
