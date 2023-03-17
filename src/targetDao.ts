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
  "0x9b164a9422a478dca4faba6976812c4b6370d069": {
    ADDRESS: "0x9b164a9422a478dca4faba6976812c4b6370d069",
    SAFE_ADDRESS: "0xaff472fe171dd58c2bb49f1907e3030247c6ef4c",
    CHAIN_ID: "0x5",
    SHARE_ADDRESS: "0xaff472fe171dd58c2bb49f1907e3030247c6ef4c",
    LOOT_ADDRESS: "0x5308ec3196fbd4bb5f1c66ec5b992ab059841c4e",
    STAKE_TOKEN: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // weth
    STAKE_TOKEN_NAME: "Ethereum",
    STAKE_TOKEN_SYMBOL: "ETH",
    STAKE_TOKEN_DECIMALS: 18,
    SHAMAN_ADDRESS: "0x131921b66887689D09d5D2FeA6a562c69bc30148",
    STAKE_PAUSED: false,
    STAKE_NEXT_START: 1677513600,
    TARGET_THRESHOLD: "10000000000000000000",
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
