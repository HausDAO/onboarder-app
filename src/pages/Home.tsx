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
      <H2>What is LunarDAO</H2>
      <LogoContainer />
      <CenterBox>
        <ParSm>
          LunarDAO is an investment fund based on lunarpunk philosophy. By
          allocating funds in privacy projects & anonymity tooling we aim to
          expand freedom and ensure sovereignty. Squad wealth leverages
          collective strength and captures value in the ecosystem by building a
          portfolio of privacy assets. Researched solutions and primitives are 
          listed in LunarDAO Investment Portal {" "}
          <Link href="https://github.com/lunardao/research/blob/master/investment_portal/README.md">
            here
          </Link>
        </ParSm>
        <ParSm>
          Any member can exit at any time. Members are anonymous hence can
          participate in building this vision without fear of frozen funds,
          legal implications or any kind of repression. See {" "}
          <Link href="https://wiki.lunardao.net/anonymizing_assets.html">
            Anonymizing assets
          </Link>{" "}
          for more information on how to stay anonymous while participating in
          the DAO. We aim to move to a full anon setup and develop
          infrastructure for a parallel economy outside of control and
          centralization.
        </ParSm>
        <ParSm>
          LunarDAO supports research on privacy technologies (listed in the
          <Link href={ABOUTLINKS.wiki}>wiki</Link>) and education
          structures such as{" "}
          <Link href="https://adalanacademy.org">Adalan Academy</Link>. This is
          where people can master skills in programming and economics while
          developing a philosophical frame to generate the future path of
          lunarpunk ecosystem.
        </ParSm>
      </CenterBox>
      <CenterBox>
        <ParLg>How to Participate</ParLg>
        <H3>Step 1: READ</H3>
        <ParMd>
          Read the {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].NAME}{" "}
          <StyledRouterLink to="/manifesto">Manifesto</StyledRouterLink> and
          make sure that you align with the values. Read the{" "}
          <Link
            href={`https://github.com/lunardao/dao`}
            style={{ marginBottom: "2rem" }}
          >
            Whitepaper
          </Link>{" "}
          for more information on Governance and Tokenomics.
        </ParMd>

        <H3>Step 2: STAKE</H3>
        <ParMd>
          Stake {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL}{" "}
          for DAO shares. <StyledRouterLink to="/join">here</StyledRouterLink>
        </ParMd>
        <H3>Step 3: Vote On Proposal</H3>
        <ParMd>
          All proposals can be found {" "}
          <Link href={`https://admin.daohaus.fun/#/molochv3/${
                TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID
              }/${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}`}>
                here
          </Link>. Participate in voting
          to direct the DAO investments and contribute to DAO development.
        </ParMd>
      </CenterBox>
    </SingleColumnLayout>
  );
};
