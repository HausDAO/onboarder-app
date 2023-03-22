import { POSTER_TAGS, TXLego } from "@daohaus/utils";
import { buildMultiCallTX } from "@daohaus/tx-builder";
import { CONTRACT } from "./contract";

export enum ProposalTypeIds {
  Signal = "SIGNAL",
  IssueSharesLoot = "ISSUE",
  AddShaman = "ADD_SHAMAN",
  TransferErc20 = "TRANSFER_ERC20",
  TransferNetworkToken = "TRANSFER_NETWORK_TOKEN",
  UpdateGovSettings = "UPDATE_GOV_SETTINGS",
  UpdateTokenSettings = "TOKEN_SETTINGS",
  TokensForShares = "TOKENS_FOR_SHARES",
  GuildKick = "GUILDKICK",
  WalletConnect = "WALLETCONNECT",
}

export const DELEGATE_TABLE_REF = "Core Executor Team";

export const APP_TX: Record<string, TXLego> = {
  VERIFY_DELEGATE: buildMultiCallTX({
    id: "VERIFY_DELEGATE",
    JSONDetails: {
      type: "JSONDetails",
      jsonSchema: {
        title: `.formValues.championName`,
        description: `.formValues.description`,
        contentURI: `.formValues.link`,
        contentURIType: { type: "static", value: "url" },
        proposalType: { type: "static", value: ProposalTypeIds.Signal },
      },
    },
    actions: [
      {
        contract: CONTRACT.CURRENT_DAO,
        method: "mintShares",
        args: [
          {
            type: "nestedArray",
            args: [".memberAddress"],
          },
          {
            type: "nestedArray",
            args: [{ type: "static", value: "100000000000000000" }],
          },
        ],
      },
      {
        contract: CONTRACT.POSTER,
        method: "post",
        args: [
          {
            type: "JSONDetails",
            jsonSchema: {
              daoId: ".daoId",
              table: { type: "static", value: "credential" },
              queryType: { type: "static", value: "list" },
              recipientAddress: ".memberAddress",
              credentialIdentifier: {
                type: "static",
                value: DELEGATE_TABLE_REF,
              },
              title: {
                type: "static",
                value: "Mantis Delegate",
              },
              description: {
                type: "static",
                value:
                  "Verified Builder of this Yeet. The DAO has verified that this member as a core contributor of this Yeet.",
              },
              longDescription: `.formValues.description`,
              link: `.formValues.link`,
            },
          },
          { type: "static", value: POSTER_TAGS.daoDatabaseProposal },
        ],
      },
    ],
  }),
  MANAGE_DELEGATE: {
    id: "MANAGE_DELEGATE",
    contract: CONTRACT.SHARES_ERC20,
    method: "delegate",
    staticArgs: [],
  },
  APPROVE_TOKEN: {
    id: "APPROVE_TOKEN",
    contract: CONTRACT.ERC_20,
    method: "approve",
    staticArgs: [],
  },
  STAKE: {
    id: "STAKE_TOKEN",
    contract: CONTRACT.ONBOARDER,
    method: "onboarder",
    staticArgs: [],
  },
  STAKECLAIM: {
    id: "STAKE_CLAIM",
    contract: CONTRACT.STAKECLAIM,
    method: "claim",
    staticArgs: [],
  },
};
