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
    TARGET_THRESHOLD: string;
  };
} = {
  "0x711e5b77e69128d46bf4e2d7a0857020c2705ac3": {
    ADDRESS: "0x711e5b77e69128d46bf4e2d7a0857020c2705ac3",
    SAFE_ADDRESS: "0xa03d87e1d765b05548f1a3ec3fe67d36d7b11d50",
    CHAIN_ID: "0x1",
    SHARE_ADDRESS: "0x2fb0303cb92ecec6220fd9da5c98a1e826e7066d",
    LOOT_ADDRESS: "0x540350b0ba8537d99f9a2fee789d92920417e15d",
    STAKE_TOKEN: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // weth
    STAKE_TOKEN_NAME: "Ethereum",
    STAKE_TOKEN_SYMBOL: "ETH",
    STAKE_TOKEN_DECIMALS: 18,
    SHAMAN_ADDRESS: "0xbDE62DB85891c64B639E27B2074D90b9a956a472",
    STAKE_PAUSED: false,
    STAKE_NEXT_START: 1677513600,
    TARGET_THRESHOLD: "6900000000000000000",
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
  title: "Why We Yeet",
  sections: [
    {
      bold: "We YEET.",
      text: "For those who recognize the power of community, Yeeter is a funding mechanism capturing enthusiasm and facilitating cooperation. Unlike crowdfunding apps or venture capitalists, we provide tools supporting value aligned individuals to pool resources towards a common goal.",
    },
    {
      bold: "Easiest Way to Fund a Project",
      text: "With customizable parameters, the Yeeter contract allows you to determine the contribution range, start and end times, and maximum capitalization."
    },
    {
      bold: "Minority Protections and Exit Options",
      text: "By preserving the option to exit, Yeeters' contributions are protected and funds are safu. As members of the DAO, Yeeters can withdraw their portion of the funds at any time by ragequitting. Your organization is decentralized from day 1."
    },
    {
      bold: "Community Driven",
      text: "Transparent and open-source, Yeeter is an exciting new fundraising primitive built by the DAOhaus community."
    },
    {
      bold: "Funders Rewarded",
      text: "Through quaterliy retroactive rewards, Yeeters are rewarded for their contributions to the DAO."
    },
    {
      bold: "Sophisticated Smart Contracts to Serve Your Community",
      text: "With your project on Y33T, contributors send tokens in the form of xDAI or ETH. The Yeeter smart contract forwards those funds into a treasury, creating stake for contributors. The result is a DAO, with a crowdfunded treasury, managed by the project team and supported by contributors.",
    }

  ],
};

export const ABOUTLINKS = {
  discord: "https://discord.gg/daohaus",
  twitter: "https://twitter.com/nowdaoit",
  github: "https://github.com/HausDAO/",
  githubOnboarder: "https://github.com/HausDAO/publichaus",
};
