import {
  Bold,
  H2,
  H3,
  Link,
  ParLg,
  ParMd,
  ParSm,
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
        <ParLg>Onboarder Development and Consulting</ParLg>
      </CenterBox>
      <CenterBox>
        <ParLg>How to Participate</ParLg>
        <ParSm>Free software isn't free. Take direct action and fund the teams that
           keep the dream alive. Fund the projects you want how much you want all while having full custody
           of your funds. </ParSm>
        <H3>Step 1: READ</H3> 
        <ParMd>
          Read about Yeeter Funding in {" "} 
          <StyledRouterLink to="/manifesto">About Yeeter</StyledRouterLink>{" "} 
          and look at the
          <Link
            href={`https://en.wikipedia.org/wiki/Mantis`}
            style={{ marginBottom: "2rem" }}
          >
            project Spec
          </Link>{" "}
          for the current project to see if you are interested in funding.
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
          All project based yeeters are eligible for PublicHAUS retroactive rewards.
        </ParMd>
        <ParMd>
          * Core membership requires a DAO vote to ensure you are a real person,
          and you have the skills to execute on project deliverables. If you are ready for
          this resposibility create a DAO proposal{" "}
          <StyledRouterLink to="/apply">here</StyledRouterLink>.
        </ParMd>
      </CenterBox>
    </SingleColumnLayout>
  );
};
