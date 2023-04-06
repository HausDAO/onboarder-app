import { TARGET_DAO } from '../targetDao';
import { Button, Checkbox, Input, Label, ParSm } from '@daohaus/ui';
import { useEffect, useState } from 'react';
import { isNumberish, toBaseUnits } from '@daohaus/utils';
import styled from 'styled-components';

export const StakeEthSection = ({
  isLoading,
  handleStake,
  balance,
}: {
  isLoading: boolean;
  balance?: string | null;
  handleStake: (wholeAmt: string) => void;
}) => {
  const [stkAmt, setStkAmt] = useState<string>('');
  const [valMsg, setValMsg] = useState<string | null>();
  const [isManifestoChecked, setIsManifestoChecked] = useState<boolean>(false);
  const [isDocsChecked, setIsDocsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (!stkAmt) {
      setValMsg(null);
    } else if (!isNumberish(stkAmt)) {
      setValMsg('Please enter a valid number');
    } else if (!balance) {
      setValMsg(`You do not have a ${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL} balance`);
    } else if (
      Number(balance) <
      Number(toBaseUnits(stkAmt, TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_DECIMALS))
    ) {
      setValMsg(`Insufficient ${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL} balance`);
    } else {
      setValMsg(null);
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStkAmt(e.target.value);
  };

  const handleLocalStake = () => {
    handleStake(stkAmt);
  };
  const toggleManifestoChecked = () => {
    setIsManifestoChecked(!isManifestoChecked);
  };
  const toggleDocsChecked = () => {
    setIsDocsChecked(!isDocsChecked);
  };

  return (
    <>
      <div className="input-box">
        <Label>
          <>
            {'Stake'} {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL}{' '}
          </>
        </Label>
        <Input
          id="stkAmt"
          onChange={handleChange}
          number
          //@ts-ignore
          value={stkAmt}
          disabled={isLoading}
          full
          placeholder={'0'}
        />
        {valMsg && <ParSm className="err">{valMsg}</ParSm>}
      </div>

        <CheckArea>
          <Checkbox
            onCheckedChange={toggleManifestoChecked}
            checked={isManifestoChecked}
            defaultChecked={false}
            title="I have read the Manifesto"
            className="checkbox"
          />
          <Checkbox
            onCheckedChange={toggleDocsChecked}
            checked={isDocsChecked}
            defaultChecked={false}
            title="I have read the Docs"
            className="checkbox"
          />
        </CheckArea>



        <Button
          type="button"
          onClick={handleLocalStake}
          fullWidth
          disabled={isLoading || !isManifestoChecked || !isDocsChecked || !!valMsg}
        >
          Stake {TARGET_DAO[import.meta.env.VITE_TARGET_KEY].STAKE_TOKEN_SYMBOL}
        </Button>
      
    </>
  );
};
const CheckArea = styled.div`
  button {
    transform: translateY(-1rem);
  }
  svg {
    transform: translateY(1rem);
  }
`;
