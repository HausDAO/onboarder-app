import { ValidNetwork } from "@daohaus/keychain-utils";
import { EthAddress } from "@daohaus/utils";

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: EthAddress;
    SAFE_ADDRESS: EthAddress;
    SHARE_ADDRESS: EthAddress;
    LOOT_ADDRESS: EthAddress;
    STAKE_TOKEN: EthAddress | "";
    SHAMAN_ADDRESS: EthAddress;
    CHAIN_ID: ValidNetwork;
    STAKE_TOKEN_NAME: string;
    STAKE_TOKEN_SYMBOL: string;
    STAKE_TOKEN_DECIMALS: number;
    STAKE_PAUSED: boolean;
    STAKE_NEXT_START: number;
    NAME: string;
    DELEGATAE_NAME: string;
  };
} = {
  "0xde3641de5c45ed90a453439156837dd66c3c6f75": {
    ADDRESS: "0xde3641de5c45ed90a453439156837dd66c3c6f75",
    SAFE_ADDRESS: "0x2cee94f5b1279d2c304dc32f1d28d921c0cd5fca",
    CHAIN_ID: "0x5",
    SHARE_ADDRESS: "0x92a51075649365a191c5d1853b96d407f066dcec",
    LOOT_ADDRESS: "0x1bf69262c3702266cfc08ad1dd6a0726b16930c3",
    STAKE_TOKEN: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // weth
    STAKE_TOKEN_NAME: "Ethereum",
    STAKE_TOKEN_SYMBOL: "ETH",
    STAKE_TOKEN_DECIMALS: 18,
    SHAMAN_ADDRESS: "0x3824893fc10025d4d0e08b80787829dad9142b8c",
    STAKE_PAUSED: true,
    STAKE_NEXT_START: 1680198561,
    NAME: "Lunar Dao",
    DELEGATAE_NAME: "Sentinel",
  }
};

// export const TARGET_DAO: {
//   ADDRESS: EthAddress;
//   SAFE_ADDRESS: EthAddress;
//   SHARE_ADDRESS: EthAddress;
//   STAKE_TOKEN: EthAddress;
//   SHAMAN_ADDRESS: EthAddress;
//   CHAIN_ID: ValidNetwork;
//   STAKE_TOKEN_NAME: string;
//   STAKE_TOKEN_SYMBOL: string;
//   STAKE_TOKEN_DECIMALS: number;
// } = {
//   ADDRESS: '0x6eb82461e1657275cdfe6cc017d8ceef4e561ccb',
//   SAFE_ADDRESS: '0x912844e8c53f3ba80ea13db737bbb25a8bf46467',
//   CHAIN_ID: '0x64',
//   SHARE_ADDRESS: '0xfcca5335cAf1130FCB6a558bc056992bA0fF4Bb3',
//   STAKE_TOKEN: '0xe6421e9af92aca6a81c9fd0babace4a9c5691c60',
//   STAKE_TOKEN_NAME: 'Weenus 💪',
//   STAKE_TOKEN_SYMBOL: 'WEENUS',
//   STAKE_TOKEN_DECIMALS: 18,
//   SHAMAN_ADDRESS: '0xf9d0aBc84c704e25EB73960daB83da1656Ea114b',
// };

export const MANIFESTO = {
  title: "The LunarDAO Manifesto",
  sections: [
    {
      bold: "We envision a future of praying mantises.",
      text: "https://wiki.lunardao.net/manifesto.html",
    },
  ],
};

export const ABOUTLINKS = {
  discord: "https://discord.gg/daohaus",
  twitter: "https://twitter.com/nowdaoit",
  github: "https://github.com/HausDAO/",
  githubOnboarder: "https://github.com/HausDAO/publichaus",
};
