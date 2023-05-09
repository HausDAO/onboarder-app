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
import { LogoContainer } from "../components/LogoContainer";
import { ABOUTLINKS, TARGET_DAO } from "../targetDao";

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
  color: hsl(43, 100%, 64%);
  :hover {
    text-decoration: none;
  }
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>What is Big Squad</H2>
      <LogoContainer />
      <CenterBox>
        <ParSm>
          Big Squad is a decentralized autonomous organization (DAO) that
        </ParSm>
      </CenterBox>
      <CenterBox>
        <ParLg>How to Participate</ParLg>
        <H3>Step 1: READ</H3>
        <H3>Step 2: STAKE</H3>
        <H3>Step 3: Vote On Proposal</H3>
      </CenterBox>
    </SingleColumnLayout>
  );
};
