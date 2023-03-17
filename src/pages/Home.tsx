import {
  Bold,
  H2,
  H3,
  Link,
  ParLg,
  ParMd,
  SingleColumnLayout,
} from "@daohaus/ui";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { HausAnimated } from "../components/HausAnimated";
import { TARGET_DAO } from "../targetDao";

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 2rem;
  }
  .space {
    margin-bottom: 2rem;
  }
  max-width: 60rem;
`;

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
  color: hsl(43,100%,64.0%);
  :hover {
    text-decoration: none;
  }
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>Yeet Project Based Funding</H2>
      <HausAnimated />
      <CenterBox>
        <ParLg>How to Participate</ParLg>
        <H3>Step 1: READ</H3> 
        <ParMd>
          Read about RageFunding in {" "} 
          <StyledRouterLink to="/manifesto">How it works</StyledRouterLink>{" "} 
          and look at the
          <Link
            href={`https://en.wikipedia.org/wiki/Mantis`}
            style={{ marginBottom: "2rem" }}
          >
            project Spec
          </Link>{" "}
        </ParMd>

          <H3>Step 2: FUND</H3> 
          <ParMd>
          Become a funder and stake {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL} for DAO
          loot. <StyledRouterLink to="/join">here</StyledRouterLink>
          </ParMd>
          <H3>Step 3: GET RETROED</H3>
        <ParMd>
          The executing team is <StyledRouterLink to="/delegates">here</StyledRouterLink>.
          Development and project progress will be transparently tracked in the DAO. 
          Funders can always rugquit and get their funds back or hangout and get retroed.
          Project based funds are eligible for PublicHAUS retroactive rewards.
        </ParMd>
        <ParMd>
          * Championship requires a DAO vote to ensure you are a real person,
          and you have the skills to execute on project deliverables. If you are ready for
          this resposibility create a DAO proposal{" "}
          <StyledRouterLink to="/apply">here</StyledRouterLink>.
        </ParMd>
      </CenterBox>
    </SingleColumnLayout>
  );
};
