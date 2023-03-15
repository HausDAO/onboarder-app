import { useCurrentDao, useDaoMember } from '@daohaus/moloch-v3-hooks';
import { MemberProfileCard } from '@daohaus/moloch-v3-macro-ui';
import { Card, DataIndicator, ParMd, Theme, widthQuery } from '@daohaus/ui';
import { useMemo } from 'react';
import styled from 'styled-components';
import { TARGET_DAO } from '../targetDao';
import { RegisteredMembers } from '../utils/types';

const DataGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: space-between;
  padding: 2rem 0;
  div {
    width: 19.7rem;
    @media ${widthQuery.sm} {
      min-width: 100%;
    }
  }
`;

const SpacedIndicator = styled(DataIndicator)`
  padding: 2rem 0;
  width: 19.7rem;

  @media ${widthQuery.sm} {
    min-width: 100%;
  }
`;

const DelegatesOverviewCard = styled(Card)`
  background-color: ${({ theme }: { theme: Theme }) => theme.secondary.step3};
  border: none;
  padding: 3rem;
  width: 100%;
`;
const DataIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    padding: 0;
  }
`;
export const DataIndicatorLabelMd = styled(ParMd)`
  opacity: 0.9;
`;

export const DelegateOverview = ({
  registeredDelegates,
  userDelegateAddress,
  userAddress,
}: {
  registeredDelegates: RegisteredMembers;
  userAddress?: string;
  userDelegateAddress?: string;
}) => {
  // const { isFetched, isFetching, member } = useDaoMember();
  // const { daoChain, daoId } = useCurrentDao();
  const userDelegateData = useMemo(() => {
    if (
      !userDelegateAddress ||
      !userAddress ||
      userDelegateAddress.toLowerCase() === userAddress.toLowerCase()
    )
      return null;
    return userDelegateAddress;
  }, [userDelegateAddress, userAddress]);

  return (
    <DelegatesOverviewCard>
      <DataGrid>
        <SpacedIndicator
          label="Champions"
          data={Object.keys(registeredDelegates).length}
        />
        <DataIndicatorContainer>
          <DataIndicatorLabelMd>Delegating To</DataIndicatorLabelMd>
          {userDelegateData ? (
            // <MemberProfileCard
            //   daoChain={daoChain}
            //   daoId={daoId}
            //   memberAddress={userDelegateData}
            // />
            <ParMd>{userDelegateData}</ParMd>
          ) : (
            'SELF'
          )}
        </DataIndicatorContainer>
      </DataGrid>
    </DelegatesOverviewCard>
  );
};
