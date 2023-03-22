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
        <H2>As a funder what's next?</H2>
        <ParMd>
          <Bold>Join the Discussion</Bold> 
          <Link
            href={ABOUTLINKS.discord}
            style={{ marginBottom: "2rem" }}
          >
            Discord
          </Link>
        </ParMd>
        <ParMd>
          <Bold>Latest News</Bold> Get the latest news from the core
          team and the community.{" "}
          <Link
            href={ABOUTLINKS.twitter}
            style={{ marginBottom: "2rem" }}
          >
            Twitter
          </Link>
        </ParMd>
        <ParMd>
          <Bold>Review the DAO</Bold> The DAO admin app will have the full
          onchain history of the DAO available for review. This will include all
          transactions, proposals, members and votes. Make new proposals and
          delegates can vote on open proposals.{" "}
          <Link
            href={`https://admin.daohaus.fun/#/molochv3/${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID}/${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}`}
            style={{ marginBottom: "2rem" }}
          >
            DAO Admin
          </Link>
        </ParMd>
        <ParMd>
          <Bold>Contribute content and code</Bold> looks at open issues and
          projects in the repo and start to contribute now.{" "}
          <Link
            href={ABOUTLINKS.github}
            style={{ marginBottom: "2rem" }}
          >
            Repo
          </Link>
        </ParMd>
        <ParMd>
          <Bold>About this onboarder app</Bold> This onboarder app is opensource
          and can be found on github. As with everything we do we appreciate
          stars, contributions and forks.{" "}
          <Link
            href={ABOUTLINKS.githubOnboarder}
            style={{ marginBottom: "2rem" }}
          >
            DaoHaus Onboarder
          </Link>
        </ParMd>
        <ParMd>
          <Bold>Get help</Bold> Do you want to DAO up your own community? Get
          advise, help, connections and services from our growing nation of DAOs and
          governerds. We are here for each other and are the most valuable asset
          we have.{" "}
        </ParMd>
      </ContentBox>
    </SingleColumnLayout>
  );
};
