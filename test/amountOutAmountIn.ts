import { assert } from "chai";
import { UiLadder } from "../src/market";
import { Side } from "../src/types";
import {
  getRequiredInAmountRouter,
  getExpectedOutAmountRouter,
} from "../src/utils/market";

const mockLadder: UiLadder = {
  bids: [
    { price: 20, quantity: 10 },
    { price: 15, quantity: 5 },
    { price: 10, quantity: 2 },
  ],
  asks: [
    { price: 25, quantity: 10 },
    { price: 30, quantity: 5 },
    { price: 35, quantity: 2 },
  ],
};

describe("Calculate expected amount out and expected amount in for both bid and ask", () => {
  it("Bid: Correctly calculate expected amount out given an amount in and an expected amount in given an amount out", () => {
    const side = Side.Bid;
    const quoteAmountIn = 25 * 10 + 30 * 5 + 35 * 1;
    const takerFeeBps = 5;
    const expectedBaseAmountOut = getExpectedOutAmountRouter({
      uiLadder: mockLadder,
      takerFeeBps,
      side,
      inAmount: quoteAmountIn,
    });
    const expectedQuoteAmountIn = getRequiredInAmountRouter({
      uiLadder: mockLadder,
      takerFeeBps,
      side,
      outAmount: expectedBaseAmountOut,
    });
    console.log("test1==?",quoteAmountIn, expectedBaseAmountOut,expectedQuoteAmountIn)
    assert.equal(quoteAmountIn, expectedQuoteAmountIn);
  });

  it("Ask: Correctly calculate expected amount out given an amount in and an expected amount in given an amount out", () => {
    const side = Side.Ask;
    const baseAmountIn = 10 + 5 + 1;
    const takerFeeBps = 5;
    const expectedQuoteAmountOut = getExpectedOutAmountRouter({
      uiLadder: mockLadder,
      takerFeeBps,
      side,
      inAmount: baseAmountIn,
    });
    const expectedBaseAmountIn = getRequiredInAmountRouter({
      uiLadder: mockLadder,
      takerFeeBps,
      side,
      outAmount: expectedQuoteAmountOut,
    });
    console.log("test2==?",baseAmountIn,expectedQuoteAmountOut, expectedBaseAmountIn)

    assert.equal(baseAmountIn, expectedBaseAmountIn);
  });
});
