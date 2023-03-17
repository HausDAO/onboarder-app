import { LOCAL_ABI } from "@daohaus/abis";
import { useQuery } from "react-query";

import { createContract } from "@daohaus/tx-builder";
import { ValidNetwork, Keychain } from "@daohaus/keychain-utils";

type FetchShape = {
  decimals?: boolean;
  name?: boolean;
  symbol?: boolean;
  balanceOf?: boolean;
};

const fetchBalanceData = async ({
  userAddress,
  chainId,
  provider,
  rpcs,
  fetchShape,
}: {
  userAddress?: string | null;
  chainId: ValidNetwork;
  provider: any | undefined;
  rpcs?: Keychain;
  fetchShape?: FetchShape;
}) => {
  try {
    const decimals = 18;
    const name = "Ethereum";
    const symbol = "ETH";

    const balance = await provider?.getBalance(userAddress);

    const data = {
      decimals,
      name,
      symbol,
      balance: balance ? (balance?.toString() as string) : null,
    };

    console.log("data eth hook", data);
    return data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error?.message as string);
  }
};

export const useETH = ({
  userAddress,
  chainId,
  provider,
  rpcs,
  cacheTime = 1000 * 60 * 20,
  staleTime = 1000 * 60 * 20,
  fetchShape = {
    decimals: true,
    name: true,
    symbol: true,
    balanceOf: true,
  },
}: {
  userAddress?: string | null;
  chainId: ValidNetwork;
  provider: any | undefined;
  rpcs?: Keychain;
  cacheTime?: number;
  staleTime?: number;
  fetchShape?: FetchShape;
}) => {
  const { data, error, ...rest } = useQuery(
    [`ethBalance`, { userAddress, chainId }],
    () =>
      fetchBalanceData({
        userAddress,
        chainId,
        provider,
        rpcs,
        fetchShape,
      }),
    {
      enabled: !!chainId,
      cacheTime,
      staleTime,
    }
  );
  return { tokenData: data, error: error as Error, ...rest };
};
