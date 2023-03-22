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
  "0xd272e6daf68f960c17a8b795dc000d67555ee9c5": {
    ADDRESS: "0xd272e6daf68f960c17a8b795dc000d67555ee9c5",
    SAFE_ADDRESS: "0x5f0c027207ed53e226002ca85f73acea34001795",
    CHAIN_ID: "0x1",
    SHARE_ADDRESS: "0x1c301edfa0578f8e982025d102d71f082bc68de6",
    LOOT_ADDRESS: "0xe429825d58c9be568a47016ff15f30522e63c025",
    STAKE_TOKEN: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // weth
    STAKE_TOKEN_NAME: "Ethereum",
    STAKE_TOKEN_SYMBOL: "ETH",
    STAKE_TOKEN_DECIMALS: 18,
    SHAMAN_ADDRESS: "0x2cc4d34344f87f1b3feca2bc160cb54c35db25b1",
    STAKE_PAUSED: false,
    STAKE_NEXT_START: 1677513600,
    TARGET_THRESHOLD: "1500000000000000000",
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
  title: "Brick by Brick We Yeet ",
  sections: [
    {
      bold: "Specific Project Funding.",
      text: "Fund only the specific bounty/grant you want to see. No more, no less. Keep full custody of funds and get protocol rewards for success.",
    },
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
  discord: "https://discord.com/channels/709210493549674598/1088154256772714676/1088154260220432474",
  twitter: "https://twitter.com/nowdaoit",
  github: "https://github.com/HausDAO/",
  githubOnboarder: "https://github.com/HausDAO/onboarder-app/tree/pby/custom-loot",
};

export const PROJECT_RESOURCES = {
  title: "Core Team Postions ",
  sections: [
    {
      bold: "Smart Contract Developer",
      text: "Filled",
    },
    {
      bold: "Subgraph Developer",
      text: "Filled",
    },
    {
      bold: "React Developer",
      text: "Filled",
    },
  ]
  }