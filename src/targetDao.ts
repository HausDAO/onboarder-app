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
  "0x747da68facd1459e9d9b8f928418da30769d3ba1": {
    // must be lowercase
    ADDRESS: "0x747da68facd1459e9d9b8f928418da30769d3ba1",
    SAFE_ADDRESS: "0x59f77dc848c2e45b5954975ee1969e7a22fa25f6",
    CHAIN_ID: "0x1",
    SHARE_ADDRESS: "0x33e6ded5073f512475e17b5f19dda90d9a782478",
    LOOT_ADDRESS: "0x94fadf770e44b7bc872fc712e4ba6aaf096fcba7",
    STAKE_TOKEN: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // weth
    STAKE_TOKEN_NAME: "Ethereum",
    STAKE_TOKEN_SYMBOL: "ETH",
    STAKE_TOKEN_DECIMALS: 18,
    SHAMAN_ADDRESS: "0xfd7f0d849c1820f066ad1dea8c8b90a59ca51ef0",
    STAKE_PAUSED: true, // override next start
    STAKE_NEXT_START: 1685577600 // jun 1, old: 1681664400, // Sunday, April 16, 2023 5:00:00 PM GMT
    NAME: "Lunar Dao",
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
      bold: "The Leviathan.",
      text: "Information is power. Privacy and transparency are two antithetical dimensions of information. Transparency must apply to those in power, to lay open their machinations and hold them accountable. This includes any government, supranational entity, corporations and conglomerates. Privacy is for the people, to prevent the agents of power from intruding in the innermost parts of our individual and social existence.",
    },
    {
      bold: "",
      text: "The mouthpieces of the surveillance state claim that our sanctuaries and agoras are enabling criminals to sell drugs, weapons and human beings, and laundering money through cryptocurrencies. They use this as an excuse to block our access to DeFi and privacy tools and limit our autonomy. All the while the crimes we stand accused of are carried out day by day on a massive scale by well-connected and legally protected people, aided by national governments, their courts and law enforcement bodies. While attacking tools that empower people, they commandeer the black market and launder money through esteemed international banks.",
    },
    {
      bold: "",
      text: "So-called democratic nation-states openly make profit by entertaining economic relations with regimes they pretend to reject. Especially when it comes to war industry, these profitable relations are carried out against international conventions these states promoted themselves. Armaments are sold to regimes and used against civilians and liberation movements in the name of profit.",
    },
    {
      bold: "",
      text: "Hegemonic nation-states and their financial institutions have control over our lives. As long as we depend on their money we have no choice but to live under the dominion of empires. Banks track and control the money flow and can freeze assets at any time. They tempt us with the illusion of wealth, making us believe that we are part of the big game, when really we are expropriated. We are the yield.",
    },
    {
      bold: "...",
      text: "",
    },
  ],
};

export const ABOUTLINKS = {
  discussion: "https://forum.lunardao.net",
  ircd: "https://ircd.lunardao.net",
  telegram: "https://t.me/lunardao",
  twitter: "https://twitter.com/lunarpunksquad",
  github: "https://github.com/HausDAO/",
  whitepaper: "https://github.com/lunardao/dao",
  manifesto: "https://wiki.lunardao.net/manifesto.html",
  website: "https://lunardao.net",
  githubOnboarder: "https://github.com/HausDAO/publichaus",
  donationLink: "https://vermillion-centaur-a3de87.netlify.app/",
  wiki: "https://wiki.lunardao.net",
};
