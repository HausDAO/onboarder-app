import { Bold, H2, Link, ParMd, SingleColumnLayout } from "@daohaus/ui";
import styled from "styled-components";
import { ABOUTLINKS, TARGET_DAO } from "../targetDao";

const ContentBox = styled.div`
  h2 {
    margin-bottom: 4rem;
  }
  max-width: 70rem;
  p {
    margin-bottom: 2rem;
  }
`;

export const About = () => {
  return (
    <SingleColumnLayout>
      <ContentBox>
        <H2>As a member what's next?</H2>
        <ParMd>
          <Bold>Community:</Bold> Join the discussion on the{" "}
          <Link href={ABOUTLINKS.discussion}>forum</Link>,{" "}
        </ParMd>
        {/* <ParMd>
          <Bold>Updates:</Bold> Get the latest news about the DAO at{" "}
          <Link href={ABOUTLINKS.website}>big squad</Link> and by
          following{" "}
          <Link href={ABOUTLINKS.twitter}>big squad</Link>
          .
        </ParMd> */}
        <ParMd>
          <Bold>Contracts:</Bold> The DAO is based on Moloch V3 architecture.
          Check{" "}
          <Link href="https://github.com/HausDAO/Baal/tree/feat/baalZodiac/contracts">
            DAOhaus repo
          </Link>{" "}
          .{" "}
        </ParMd>
        <ParMd>
          <Bold>Governance:</Bold> 
        </ParMd>
        <ParMd>
          Go to the{" "}
          <Bold>
            <Link
              href={`https://admin.daohaus.fun/#/molochv3/${
                TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID
              }/${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}`}
            >
              DAO admin app
            </Link>
          </Bold>
          , review the DAO history and take part of shaping the future.{" "}
        </ParMd>
        <ParMd>
          <Bold>Squad Coins:</Bold> Are you looking to summon a squad coin?{" "}
          <Link href="https://melodious-fox-e43d87.netlify.app/">
            Squad Coin Summoner
          </Link>{" "}
          .{" "}
        </ParMd>
        
      </ContentBox>
    </SingleColumnLayout>
  );
};
