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
          <Link href={ABOUTLINKS.ircd}>ircd</Link> and{" "}
          <Link href={ABOUTLINKS.telegram}>Telegram</Link>. Community
          meetings take place on ircd on Monday 17UTC, channel{" "}
          <code>#lunardao</code>.
        </ParMd>
        <ParMd>
          <Bold>Updates:</Bold> Get the latest news about the DAO at{" "}
          <Link href={ABOUTLINKS.website}>lunardao.net</Link> and by
          following{" "}
          <Link href={ABOUTLINKS.twitter}>@lunarpunksquad</Link>
          .
        </ParMd>
        <ParMd>
          <Bold>Contracts:</Bold> The DAO is based on Moloch V3 architecture.
          Check{" "}
          <Link href="https://github.com/HausDAO/Baal/tree/feat/baalZodiac/contracts">
            DAOhaus repo
          </Link>{" "}
          and review the LunarDAO{" "}
          <Link href="https://github.com/lunardao/dao/blob/master/README.md#contracts">
            contracts
          </Link>
          .{" "}
        </ParMd>
        <ParMd>
          <Bold>Governance:</Bold> To learn more about the governance process
          and how to submit proposals, read the{" "}
          <Link href={ABOUTLINKS.whitepaper}>Whitepaper</Link> and{" "}
          <Link href="https://github.com/lunardao/lip/blob/main/lip-0001.md">
            LIP-0001
          </Link>
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
          <Bold>Support</Bold> LunarDAO{" "}
          <Link href={`${ABOUTLINKS.website}/support.html`}>development</Link>.
        </ParMd>
        <ParMd>
          <Bold>❤️ Donate ❤️</Bold> Make a donation to DAOhaus so these things
          can stay free and opensource.{" "}
          <Link href={ABOUTLINKS.donationLink} style={{ marginBottom: "2rem" }}>
            DaoHaus Onboarder
          </Link>
        </ParMd>
      </ContentBox>
    </SingleColumnLayout>
  );
};
