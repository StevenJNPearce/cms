---
title: Oracles and MARKET Protocol
author: Lazar Jovanovic
category: Oracle
published_at: '2018-08-13T12:22:41-05:00'
thumbnail: /uploads/screen_shot_2018-07-27_at_4.55.58_pm.png
---
Oracles date back to ancient Norse and Greek mythology. In Greek mythology, an oracle took on a few manifestations, all representing an entity in which information beyond the scope of the mortal world could be retrieved.

 
Apollo, Greek God of the Sun, was an oracle, due to his knowledge of the future. An oracle was also an individual in communication with the Gods, able to act as a medium between the human population and the thoughts and desires of the ruling Gods. The physical location where said communication took place, where one could come in contact with information from the Gods, was also an oracle.

 
Today, the idea of an oracle takes on a new role. Oracles represent persistent, updating databases of information that clients can access. A trusted third-party oracle provides a much more efficient method of retrieving and communicating data.

 
The most popular oracle worldwide is [Oracle Database](https://www.oracle.com/database/index.html). In the case of Oracle Database, a major use-case of the platform is for payment processing, whereby Oracle Database can be used for retrieving financial account information or communicating electronic signatures to verify payments and transfer funds between accounts.

 

## Blockchain and Oracles

 
In the world of blockchain infrastructure, oracles also play invaluable roles in numerous smart contract platforms and protocols, such as [MARKET Protocol](https://marketprotocol.io/).

 Blockchains, and the tools and environments built upon them, essentially operate in isolated conditions, as if walled off from the outside world. At least for the foreseeable future, smart contracts maintain no capabilities of communicating with outside systems.

 

This presents a significant obstacle, as a majority of smart contracts can only realize their potential with the aid of other systems of data and information. Prediction markets need to verify outcomes of real world events, gambling platforms need random number generators, ride-sharing applications need GPA data, and so on.

 

With oracles, however, smart contracts can connect with the world in which they operate in a manner they otherwise could not. In most cases, the role of the oracle is to retrieve and verify some real life occurrence and, through communication of said outcome onto the blockchain, the smart contract will execute some function.

 

If, for example, there was a platform for peer-to-peer homeowner’s insurance, an oracle could be used to verify or reject claims of damages due to inclement weather, such as storms or floods. The smart contract would then either reject the claim or send it to the next step of the process.

 

## Oracles and MARKET Protocol

 

As you may have imagined, MARKET Protocol is one such blockchain development that would be significantly inhibited without the aid of an oracle. In maintaining legitimacy and usability, it is important that the prices of stocks, commodities, and cryptocurrencies speculated upon through MARKET Protocol are constantly monitored.

 

Futures contracts, for example, are only worthwhile so long as it can be ensured that the contract will close when either the price floor or ceiling is reached. Moreover, the expiration must settle the contract at the exact price of the asset for which it is orchestrated. If these necessities are not met, then use of the protocol is no different than mindless gambling.

 

However, blockchain environments require certain specifications of oracles in order to maintain compatibility. First and foremost, the oracle must be able to communicate in the languages utilized by the smart contracts (such as Solidity for Ethereum contracts). Alas, major oracles, like Oracle Database and others, are incompatible with these emerging blockchain technologies.

 

Fortunately, there are a number of oracles currently in use that are built specifically for communication with smart contracts. Existing developments can be grouped into centralized and decentralized approaches. Each carries unique benefits and challenges associated.

 

## Centralized Oracles

 

More reminiscent of traditional oracles, there exists a number of oracles compatible with smart contracts based on Ethereum and a select few alternative blockchains. Two leading examples are [Oraclize.it](http://www.oraclize.it/) and [Thomson Reuters BlockOne IQ](https://blockoneiq.thomsonreuters.com/), both of which MARKET Protocol is currently exploring.

 

BlockOne IQ leverages information from major news sources, including New York Times, Coindesk, and Reddit, to communicate points of data such as cryptocurrency prices and actions of companies and projects. This oracle is utilized by blockchain-based exchanges and markets somewhat similar to MARKET Protocol to take in and act upon information about cryptocurrency and traditional financial markets alike.

 

Oraclize.it provides a somewhat more elevated approach, and the scope of its information is much broader than the financial data  provided by BlockOne IQ. Rather than processing its own information, Oraclize.it acts more like a bridge, connecting sources of information that would otherwise be unable to communicate with smart contracts. For example, Oraclize.it can translate weather information from a weather satellite into a language understood by the contracts.

 

While both oracles embody meaningful solutions, they are both inhibited by their fundamental nature as centralized third parties. A key component of the decentralized nature of blockchain is a reliance on consensus. For internal information, including contract execution, transactions, block production and so on, data is confirmed at the agreement of all parties in the network.

 

This same level of consensus is impossible with centralized oracles, and can represent huge security weaknesses, as all must trust this oracle to provide valid information. Oraclize.it does offer an added measure of security through a checks-and-balances system that ensures authenticity of the information conveyed. However, this authentication step provides significant additional costs to the base cost of inquiry.

 

## Decentralized oracles

More in the spirit of cryptocurrency, there are a number of decentralized oracles in development. [Chainlink](https://www.smartcontract.com/link) represents a leading solution among these developments. Essentially, Chainlink is a decentralized network of oracles. These oracles can represent providers of any type of pertinent information: event outcomes, website APIs, and bank payments are just a few examples.

 

Users of Chainlink send queries to the network through a [smart contract](https://github.com/thodges-gh/ChainLink-Node/blob/master/SmartContractProcess.md). Through the query, users can specify exactly how they want to receive the data: the number of oracles involved, the query fee to be earned by the oracles, the required reputation for the oracles to participate in the query, and of course, the parameters for the information itself. Through this approach, consensus can be upheld. In the case of MARKET Protocol contracts, the order book hosts can come to consensus on the specifications of the queries sent to Chainlink.

 

## What if an oracle fails?

What happens if an oracle queried does not respond? Either due to network shutdown, hardware failure, or software malfunction, oracles can occasionally be rendered temporarily incapacitated. Such realities have been seen by traditional derivatives markets in the past. Fortunately, there is a solution to this issue.

The waterfall method protects MARKET Protocol and other oracle users from severed communications, for whatever reason. The waterfall method is simple. MARKET Protocol queries an oracle, oracle A. If oracle A does not respond, MARKET simply goes to the next one, oracle B. This process repeats until an oracle responds with the requested information. This is a worthwhile solution in retrieving breaking and real-time information that can be sometimes difficult to obtain.

 
If you wish to learn more about our project, please reach out to our team members on [Telegram](https://t.me/Market_Protocol_Chat) and [Discord](https://marketprotocol.io/discord), visit our website and subscribe to our newsletter to stay updated.
