import { useDHConnect } from "@daohaus/connect";
import { FormBuilder } from "@daohaus/form-builder";
import {
  Bold,
  FormLayout,
  H2,
  H3,
  Link,
  ParMd,
  ParSm,
  SingleColumnLayout,
  Spinner,
} from "@daohaus/ui";

import { useState } from "react";
import { useUserMember } from "../hooks/useUserMember";
import { CustomFields } from "../legos/config";

import { APP_FORM } from "../legos/forms";
import { PROJECT_RESOURCES, TARGET_DAO } from "../targetDao";
import styled from "styled-components";
import { StyledRouterLink } from "../components/Layout";

enum PageState {
  Idle = "Idle",
  Success = "Success",
  Error = "Error",
}

export const Application = () => {
  const { address } = useDHConnect();
  const { isMember, isLoading, error } = useUserMember({
    daoId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS,
    chainId: TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID,
    memberAddress: address,
  });
  const [pageState, setPageState] = useState(PageState.Idle);

  if (isLoading) {
    return (
      <FormLayout title="Loading">
        <Spinner size="12rem" />
      </FormLayout>
    );
  }
  if (error) {
    return (
      <FormLayout title="Error">
        <ParMd>{error.message}</ParMd>
      </FormLayout>
    );
  }
  // if (!isMember) {
  //   return (
  //     <FormLayout title="Not a member">
  //       <ParMd style={{ marginBottom: "1rem" }}>
  //         You are not a member of this DAO.
  //       </ParMd>
  //       <StyledRouterLink to="/join">
  //         {" "}
  //         Please join the DAO first.
  //       </StyledRouterLink>
  //     </FormLayout>
  //   );
  // }

  if (pageState === PageState.Success) {
    return (
      <FormLayout title="Success!">
        <ParMd style={{ marginBottom: "1rem" }}>
          Your verification Proposal is ready for voting
        </ParMd>
        <Link
          href={`https://admin.daohaus.fun/#/molochv3/${
            TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID
          }/${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].ADDRESS}/proposals`}
        >
          Click here to see your proposal
        </Link>
      </FormLayout>
    );
  }
  if (pageState === PageState.Error) {
    return (
      <FormLayout title="Error!">
        <ParMd>Something went wrong. Please try again.</ParMd>
      </FormLayout>
    );
  }
  if (pageState === PageState.Idle) {
    return (
      <>
        <SingleColumnLayout>
          <ContentBox>
            <H2>{PROJECT_RESOURCES.title}</H2>
            
            {PROJECT_RESOURCES.sections.map((section) => {
              return (
                <ParMd key={section.bold}>
                  <Bold>{section.bold}</Bold> {section.text}
                </ParMd>
              );
            })}
            <ParSm>(no open positions)</ParSm>
          </ContentBox>
          <Link
            href={`https://hackmd.io/@Dekan/SJUV9lIl3`}
            style={{ marginBottom: "2rem" }}
          >
            Project Spec
          </Link>

          <FormBuilder
            form={APP_FORM.VERIFY_DELEGATE}
            targetNetwork={TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID}
            customFields={CustomFields}
            lifeCycleFns={{
              onPollSuccess() {
                setPageState(PageState.Success);
              },
              onTxError() {
                setPageState(PageState.Error);
              },
              onPollError() {
                setPageState(PageState.Error);
              },
            }}
          />
        </SingleColumnLayout>
      </>
    );
  }
  return null;
};

const ContentBox = styled.div`
  h2 {
    margin-bottom: 4rem;
  }
  max-width: 70rem;
  p {
    margin-bottom: 2rem;
  }
`;
