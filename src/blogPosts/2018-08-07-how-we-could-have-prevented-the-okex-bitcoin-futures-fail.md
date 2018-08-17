---
title: How we could have prevented the OKEx Bitcoin Futures Fail
author: Seth Rubin
category: Trading
published_at: '2018-08-07T17:08:45-05:00'
thumbnail: /uploads/capture.png
---
_MARKET Protocol — No Margin Calls, Forced Liquidations, Unknown Downside or Socialized Losses_

Now seems to be a great time to discuss some major topics and issues surrounding the OKEx Bitcoin Future saga. To paraphrase this [Coindesk article](https://www.coindesk.com/okex-confirms-9m-clawback-after-enormous-bitcoin-futures-position-fails/), OKEx force-liquidated a very large (~$400m notional) bitcoin futures position. The size of this position triggered a socialized loss on the OKEx platform to be split proportionally by all profited traders’ realized + unrealized gains. The loss to investors is almost $9m. The ending of this story is still TBD.

MARKET Protocol was designed and implemented to address a number of these issues providing a decentralized solution to prevent exactly what happened on OKEx.

Let’s unpack what happened here.

**The first issue was insolvency** — the trader entered a position which quickly became insolvent. Since many crypto traders primarily trade spot relationships, like ETH or BTC on something like Coinbase, it’s important to take a second and explain how a future works. Futures have a notional value, in the case of OKEx, they represent $100 of BTC. Traders can trade these contracts without posting the full $100 of collateral. The OKEx futures contracts have implied leverage allowing someone to post $10 or even $5 to trade with 10x or 20x leverage. Contrast that to spot trading where traders are required to post the full notional value.

MARKET Protocol was designed to remove margin calls and forced liquidations while still providing traders access to responsible leverage. Contract specifications are created with a price cap and floor defining the maximum upside and downside of any position at execution which is escrowed in the smart contract for the duration of the trade. This guarantees the solvency of all open positions and eliminates the need for margin calls while still providing traders access to leverage.

**Next, let’s talk about forced liquidations**. When a position with leverage moves against a trader, their collateral begins to disappear. Eventually, the position becomes unfunded or insolvent. An exchanges’ goal is to liquidate positions ahead of insolvency. Unfunded positions mean someone (often the exchange or in OKEx’s case, other traders — we will cover socialized losses later) has to pay back the other side of the trade. Exchanges try to limit these liabilities by exiting the position as quickly as possible, way before the position is entirely unfunded. Which often means going to the market and aggressively closing out the position with market orders. This process is systemically dangerous and very often triggers cascading liquidations further pushing a fragile and volatile market to extremes. Good examples of this are the [Ethereum flash crash](https://news.bitcoin.com/coinbase-under-investigation-for-ethereum-flash-crash/) on Coinbase in 2017 [or the original flash crash of 2010](https://en.wikipedia.org/wiki/2010_Flash_Crash) (which I had the unfortunate privilege of trading through).

MARKET Protocol trading contracts have price floors and caps which are the same for all traders. All open positions go directly to settlement when trading collateral is exhausted. Open positions are not exited to the broad market and therefore no cascading liquidations exist.

**MARKET Protocol has guaranteed stop loss execution.** In the case of the ETH flash crash, a single trade sent the price of ETH from $325 down to $225. Next, a series of cascading liquidation orders forced the price from $225 down to around $0.10. Traders were liquidated all the way down to $0.10 only to see the price quickly jump back to $300. This scenario really illustrates the danger and risks associated with forced liquidations. Can you imagine if your ETH position was liquidated at $0.28? With MARKET Protocol all traders, know and fund their maximum downside at execution, removing the uncertainty and risk of forced liquidations.

BitMEX futures have a mechanism called [Auto Deleveraging](https://www.bitmex.com/app/autoDeleveraging) which creates uncertainty for both winners and losers around price execution. It’s important to note that most people talk about stop-loss uncertainty. Winners are also affected.** Socialized losses and auto deleveraging introduce unknown upside and downside, creating contracts which are fundamentally flawed as hedging instruments.** This misses the number one use case of derivatives but that’s a topic for another post.

Usually, exchanges and clearing firms are on the hook for funds lost by an insolvent or liquidated counterparty. They implicitly provide a credit guarantee and one of the main reasons they charge fees.

But this is crypto, Exchanges implement something that would never fly in the traditional world — socialized losses. It’s a great deal for them! They take all the upside, pushing the tail risk on traders and investors. We see it here with OKEx. We saw it when BitFinex [socialized hack](https://www.reuters.com/article/us-bitfinex-hacked-hongkong/bitfinex-says-expects-socialized-loss-for-72-million-bitcoin-hack-idUSKCN10G0CZ) losses in 2016 and would have seen it with Coinbase’s flash crash. As a PR band-aid, the exchanges who can afford to are footing the bill. In OKEx’s case, they are injecting BTC to cover some of these socialized losses. Coinbase paid back traders who were liquidated. Bitfinex users weren’t as lucky. They saw their balances haircut but almost 40%, receiving an IOU instead.

MARKET Protocol contracts never have forced liquidations or funding shortfalls, and therefore, have no need to ever socialize losses.

The fact that socialized losses even exist and traders are willing to accept it clearly demonstrates the need for more competition and alternatives in the space.

**Let’s redefine this trade,** if the BTC/USD position was created on MARKET Protocol, the trader would be able to use leverage to enter the position, the position would be fully funded at execution and guaranteed solvent. Which means as the trade moved against the trader, no additional margin would be required. No risk department would need to oversee the position or notify the trader. As the trader exhausted all trading collateral, the position would automatically be settled with no market impact. All traders on the winning side of the trade are guaranteed their payouts with no possibility of a socialized loss. Further, all traders at execution know their maximum downside and upside going into the trade. All this happens without centralized intervention. How cool is that?!

I have been a professional derivatives trader since 2005 with experience trading in almost every asset class. The problems we are addressing provide real systemic benefit to both the traditional financial and crypto space. We have been working full time on MARKET Protocol for the last 14 months. Our solution addresses many of these core issues mentioned above in addition to providing a protocol allowing holders of ERC20 assets to use those assets as collateral for any other trading relationship including things like Apple stock or other crypto assets.

Please take a look at our website, read our [whitepaper](https://marketprotocol.io/whitepaper) and join our [Telegram](https://t.me/Market_Protocol_Chat)!
