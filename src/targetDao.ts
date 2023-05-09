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
  "0xb302ea414fa7bfa6f8fcbaa05262f01d741062f3": {
    // must be lowercase
    ADDRESS: "0xb302ea414fa7bfa6f8fcbaa05262f01d741062f3",
    SAFE_ADDRESS: "0x59f77dc848c2e45b5954975ee1969e7a22fa25f6",
    CHAIN_ID: "0xa4b1",
    SHARE_ADDRESS: "0x3af190b273c1645fdace99d12d9c055be93e2b1d",
    LOOT_ADDRESS: "0x5912ef751dde14d92e307aa14cd4036f2b815368",
    STAKE_TOKEN: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // weth
    STAKE_TOKEN_NAME: "Arbitrum ETH",
    STAKE_TOKEN_SYMBOL: "aETH",
    STAKE_TOKEN_DECIMALS: 18,
    SHAMAN_ADDRESS: "0x99aab1ce9bf5c32ed0112e9693a42ddf0138273c",
    STAKE_PAUSED: false, // override next start
    STAKE_NEXT_START: 1, // jun 1, old: 1681664400, // Sunday, April 16, 2023 5:00:00 PM GMT
    NAME: "Big Squad Dao",
    DELEGATAE_NAME: "Steward",
  },
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
  title: `The ${TARGET_DAO[import.meta.env.VITE_TARGET_KEY].NAME} Manifesto`,
  sections: [
    {
      bold: "The Big Squad DAO",
      text: " is to alighn all Squads with a shared but initialy non ragequitable treasury. Tokens are initialy non transferable and members make proposals to manage the mission, roadmap and treasury.",
    },
    {
      bold: "",
      text: "",
    },
    {
      bold: "",
      text: "",
    },
    {
      bold: "",
      text: "",
    },
    {
      bold: "...",
      text: "",
    },
  ],
};

export const ABOUTLINKS = {
  discussion: "https://discord.gg/daohaus",
  ircd: "",
  telegram: "",
  twitter: "https://twitter.com/nowdaoit",
  github: "https://github.com/HausDAO/",
  whitepaper: "",
  manifesto: "",
  website: "https://daohaus.club",
  githubOnboarder: "https://github.com/HausDAO/publichaus",
  donationLink: "",
  wiki: "",
};
