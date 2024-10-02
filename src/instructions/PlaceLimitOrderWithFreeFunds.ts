/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
import { OrderPacket, orderPacketBeet } from "../types/OrderPacket";

/**
 * @category Instructions
 * @category PlaceLimitOrderWithFreeFunds
 * @category generated
 */
export type PlaceLimitOrderWithFreeFundsInstructionArgs = {
  orderPacket: OrderPacket;
};
/**
 * @category Instructions
 * @category PlaceLimitOrderWithFreeFunds
 * @category generated
 */
export const PlaceLimitOrderWithFreeFundsStruct =
  new beet.FixableBeetArgsStruct<
    PlaceLimitOrderWithFreeFundsInstructionArgs & {
      instructionDiscriminator: number;
    }
  >(
    [
      ["instructionDiscriminator", beet.u8],
      ["orderPacket", orderPacketBeet],
    ],
    "PlaceLimitOrderWithFreeFundsInstructionArgs"
  );
/**
 * Accounts required by the _PlaceLimitOrderWithFreeFunds_ instruction
 *
 * @property [] phoenixProgram Phoenix program
 * @property [] logAuthority Phoenix log authority
 * @property [_writable_] market This account holds the market state
 * @property [**signer**] trader
 * @property [] seat
 * @category Instructions
 * @category PlaceLimitOrderWithFreeFunds
 * @category generated
 */
export type PlaceLimitOrderWithFreeFundsInstructionAccounts = {
  phoenixProgram: web3.PublicKey;
  logAuthority: web3.PublicKey;
  market: web3.PublicKey;
  trader: web3.PublicKey;
  seat: web3.PublicKey;
};

export const placeLimitOrderWithFreeFundsInstructionDiscriminator = 3;

/**
 * Creates a _PlaceLimitOrderWithFreeFunds_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category PlaceLimitOrderWithFreeFunds
 * @category generated
 */
export function createPlaceLimitOrderWithFreeFundsInstruction(
  accounts: PlaceLimitOrderWithFreeFundsInstructionAccounts,
  args: PlaceLimitOrderWithFreeFundsInstructionArgs,
  programId = new web3.PublicKey("PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY")
) {
  const [data] = PlaceLimitOrderWithFreeFundsStruct.serialize({
    instructionDiscriminator:
      placeLimitOrderWithFreeFundsInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.phoenixProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.logAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.market,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.trader,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.seat,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}