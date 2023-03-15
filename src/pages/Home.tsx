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
      <H2>BUTTERFLY Onboarder</H2>
      <HausAnimated />
      <CenterBox>
        <ParLg>How to Participate</ParLg>
        <H3>Step 1: READ</H3> 
        <ParMd>
          Read the DAOhaus{" "}
          <StyledRouterLink to="/manifesto">Manifesto</StyledRouterLink> and make sure that you align
          with the values. Read the{" "}
          <Link
            href={`https://en.wikipedia.org/wiki/Butterfly`}
            style={{ marginBottom: "2rem" }}
          >
            Butterfly docs croak
          </Link>{" "}
          and make sure you understand what this is all about.
        </ParMd>

          <H3>Step 2: STAKE</H3> 
          <ParMd>
          Stake {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL} for DAO
          shares. <StyledRouterLink to="/join">here</StyledRouterLink>
          </ParMd>
          <H3>Step 3: DELEGATE</H3>
        <ParMd>
          Delegate your shares to a DAO Champion <Bold>OR</Bold> apply to be a
          Champion yourself. You can read Champion platforms on their profile
          page. <StyledRouterLink to="/delegates">here</StyledRouterLink>
        </ParMd>
        <ParMd>
          * Championship requires a DAO vote to ensure you are a real person,
          and you are aligned with the DAOhaus mission. If you are ready for
          this resposibility create a DAO proposal{" "}
          <StyledRouterLink to="/apply">here</StyledRouterLink>.
        </ParMd>
      </CenterBox>
    </SingleColumnLayout>
  );
};
