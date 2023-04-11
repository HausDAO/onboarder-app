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
          <p><strong>Community:</strong> Join the discussion on the <a href="https://forum.lunardao.net">forum</a>, <a href="https://wiki.lunardao.net/ircd.html">ircd</a> and <a href="https://t.me/LunarDAO_Official">Telegram</a>. Community meetings take place on ircd on Monday 17UTC, channel <code>#lunardao</code>.</p>
          <p><strong>Updates:</strong> Get the latest news about the DAO at <a href="https://lunardao.net/">lunardao.net</a> and by following <a href="https://twitter.com/lunarpunksquad">@lunarpunksquad</a>.</p>
          <p><strong>Contracts:</strong> The DAO is based on Moloch V3 architecture. Check <a href="https://github.com/HausDAO/Baal/tree/feat/baalZodiac/contracts">DAOhaus repo</a> and review the LunarDAO <a href="https://github.com/lunardao/dao/blob/master/README.md#contracts">contracts</a>. </p>
          <p><strong>Governance:</strong> To learn more about the governance process and how to submit proposals, read the <a href="https://github.com/lunardao/dao">Whitepaper</a> and <a href="https://github.com/lunardao/lip/blob/main/lip-0001.md">LIP-0001</a></p>
          <p>Go to the <strong><a href="https://admin.daohaus.fun/#/molochv3/0x1/0x747da68facd1459e9d9b8f928418da30769d3ba1">DAO admin app</a></strong>, review the DAO history and take part of shaping the future. </p>
          <p><strong>Support</strong> LunarDAO <a href="https://lunardao.net/support.html">development</a>.</p>
        <ParMd>
          <Bold>❤️ Donate ❤️</Bold> Make a donation to DAOhaus so these things can stay free and opensource.{" "}
          <Link
            href={ABOUTLINKS.donationLink}
            style={{ marginBottom: "2rem" }}
          >
            DaoHaus Onboarder
          </Link>
        </ParMd>
      </ContentBox>
    </SingleColumnLayout>
  );
};
