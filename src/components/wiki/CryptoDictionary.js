import React from 'react';
import { Box } from '@chakra-ui/react';
import CryptoDictionaryLetterSection from './CryptoDictionaryLetterSection';

const CryptoDictionary = () => {
    const letters = [
        {
            letter: 'A',
            words: [
                {
                    title: 'AAVE',
                    text: 'Aave is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets.'
                },
                {
                    title: 'Airdrop',
                    text: 'giving away tokens for free'
                },
                {
                    title: 'Arbitrage',
                    text: 'Arbitrage is the business of making money by buying something for a low price in one market and selling it in another for a profit. Arbitrage can be done with virtually any product including cryptocurrencies.'
                },
                {
                    title: 'ATH',
                    text: 'All Time High'
                }
            ]
        },
        {
            letter: 'B',
            words: [

                {
                    title: 'Bull',
                    text: 'Bull market is defined as a continued increase in value for any type of asset. Also known as a “bull run”. You can think of a bull, swinging his big horned head upwards rocketing prices upwards. An investor who is a bull wants to profit from the movement of increasing prices.'
                }
            ]
        },
        {
            letter: 'C',
            words: [
                {
                    title: 'Candlesticks',
                    text: 'Candlesticks are defined as a representation on a chart used to show changes in price over time. Each candle provides 4 points of information, the opening price, the closing price, the high, and the low. Also known as ‘candles’ and ‘Japanese candlesticks’.The Japanese developed this type of chart hundreds of years ago while trading rice and so it was named after them. Today, many investors prefer candles because they are easy to understand and provide a lot of quick information. Candles have two parts, the body (it can be hollow or filled) and the long thin lines drawn above and/or below. The lines are also called “wicks”, “shadows”, or “tails”. The body is used to show the opening and closing price for that time period. The wicks are used to show the highest price and lowest price reached for that time period. Candles are often red or green, where red indicates a price started high and ended low and green indicates a price that started low and ended high. Some candles are black and white, where black indicates a price that started high and ended low and white indicates a price that started low and ended high. Candles represent a single time period. For example, if you are looking at a 1 hour chart, each candle represents 1 hour of trades. Some candles are long and some candles are short. Long candles tell you there was a lot of pressure to buy or sell and short candles tell you there was very little pressure'
                }
            ]
        },
        {
            letter: 'D',
            words: [
                {
                    title: 'DAO',
                    text: 'Decentralized Autonomous Organizations also DAO describe leaderless organization supported by a network of computers. To be decentralized, it must have no central location because it is running on a network of computers. And because there is no single leader and has its own rules to follow, it is autonomous, or self-governing'
                },
                {
                    title: 'DApp',
                    text: 'Decentralized Application or dApp is defined as a software application that has its technology running publicly on a network of computers. With a dApp, the technology is being maintained by many individuals instead of by one organization. That network gives the technology security. A hacker cannot incorrectly alter the application’s data unless they were able to get access into nearly all of the network’s computers and adjust it there. dApp can also be spelled “DApp” or “Dapp”.'
                },
                {
                    title: 'DEFI',
                    text: 'In its simplest form, decentralized finance is a system by which financial products become available on a public decentralized blockchain network, making them open to anyone to use, rather than going through middlemen like banks or brokerages. Unlike a bank or brokerage account, a government-issued ID, Social Security number, or proof of address are not necessary to use DeFi. More specifically, DeFi refers to a system by which software written on blockchains makes it possible for buyers, sellers, lenders, and borrowers to interact peer to peer or with a strictly software-based middleman rather than a company or institution facilitating a transaction.'
                },
                {
                    title: 'DEX',
                    text: 'Decentralized Exchange or DEX is defined as a place where cryptocurrencies are traded directly person-to-person, without a company holding their money or crypto for them. Compare a decentralized exchange with a centralized exchange. In a centralized exchange, the customer gives their crypto to the exchange and trusts them to hold it safely. The exchange lets them move the value of that deposit around and later withdraw it in the cryptocurrency they represent. A decentralized exchange doesn’t require you trust someone to hold your crypto for you. This positive quality is known as “trustless”.'
                }
            ]
        },
        {
            letter: 'E',
            words: [
                {
                    title: 'ERC-20',
                    text: 'ERC-20 is defined as a proposed set of rules and standards for creating new cryptocurrency using Ethereum as the foundation. ERC-20 describes crypto made with Ethereum technology that follow these rules and standards. ERC stands for “Ethereum Request for Comments”. The Ethereum system was designed so that anyone could propose improvements. Each proposal is known as an “Ethereum Improvement Proposal” (EIP) and given a unique identifying number. Once the EIP is approved by a committee, it becomes an ERC and is also given a number. ERC-20 standards are valuable because they let people who create technology around crypto know how the tokens will behave. With ERC-20, programmers can create better programs that run smoother and more efficiently. ERC-20 has not yet technically been approved by a majority of the Ethereum network. In other words, better standards are under development. But because ERC-20 is a logical proposal, it has been widely accepted and used as a standard for new crypto built with Ethereum’s technology. There are many other ERCs regarding how crypto is made using Ethereum. Common examples include: ERC-223: A proposal almost identical to ERC-20 but that also minimizes accidental loss. Many users have accidentally sent their ERC-20 crypto to an incorrect address which locks them up, creating a permanent loss. ERC-223 would prevent that. ERC-721: A proposal to create unique identifiers on a crypto made with Ethereum. This unique quality is useful when creating collectibles, where each item needs to be distinctly different from every other item.'
                },
                {
                    title: 'Exchange',
                    text: 'Exchange is defined as a place where something of value can be traded. One of the purposes of an exchange is to ensure fair trades are conducted. Traditionally, stocks were a common item traded on exchanges. Now with exchanges for cryptocurrencies, many new exchanges are being built in countries around the world.'
                }
            ]
        },
        {
            letter: 'F',
            words: [
                {
                    title: 'FOMO',
                    text: 'FOMO is short for Fear of Missing Out. FOMO is often felt when you see a coin start to increase in value and you don’t yet own it.'
                },
                {
                    title: 'Fork',
                    text: 'A fork or accidental fork is a split in the digital recordings, known as the blockchain. A blockchain is the technology for creating permanent, secure digital recordings. Imagine the blockchain as a book of records where each new page in that book is what is known as a “block”. Blocks are attached to each other making what is known as the blockchain. There are hundreds of blockchains created by many groups to record all sorts of information. Each blockchain is maintained simultaneously by a network of computers connected by the Internet. Updates to the blockchain are seen immediately and manipulation is extremely difficult, perhaps impossible. With blockchains, only one recording (block) should be made at a time. However, sometimes two blocks are created at once by two computers, both valid. Because all recordings are shared among the network of computers, one block will reach one group of computers first while the second block will reach the other group of computers. This creates a split in the blockchain record, known as a fork. Eventually, a computer in the network will build another block on one of the forks and it will grow. The computers always identify the longer fork as the correct one, and so will smoothly switch over, abandoning the shorter one.'
                },
                {
                    title: 'FUD',
                    text: 'FUD is short for Fear, Uncertainty and Doubt. FUD is any information that is supposed to create feelings of fear, uncertainy, doubt and other negative emotions'
                }
            ]
        },
        {
            letter: 'G',
            words: [

                {
                    title: 'Gwei',
                    text: 'Gwei is a very small amount of ethereum coin used to calculate transaction fees for sending ethereum to another. One ethereum coin is worth 1 billion (1,000,000,000) gwei.'
                }
            ]
        },
        {
            letter: 'H',
            words: [
                {
                    title: 'Halving',
                    text: 'Halving comes from an Old English word meaning “half”. In cryptocurrencies, mining is a computer process of recording and verifying information on the digital record known as the blockchain. In bitcoin and other currencies, mining also requires computers compete with each other to solve a complicated math problem. Once solved, a new block is discovered that can be added to the chain of blocks and a reward of brand new bitcoin is given to the computer that solved the math problem first. Halving is the reduction of the bitcoin mining reward issued by half.'
                },

                {
                    title: 'Hash rate',
                    text: 'Hash rate is defined as the speed at which a computer can take any set of information and turn it into letters and numbers of a certain length, known as a “hash”. Hash rate is also the combined hash speed of every computer in the network. Hash rate is calculated at hashes per second (h/s). Hash rate is important for computers that mine. Mining is the process of recording and verifying information on the digital record known as the blockchain. The blockchain is made up of a sequence of single recordings known as a block. To keep the blockchain network running smoothly, only one block can be created at a time. To control when blocks are created, users are required to make their computers solve a math problem involving hashing. The first computer to solve this problem can create a new block and record information on the blockchain.Miners often purchase very expensive specially designed computers that have higher hash rates to increase their chances of solving the math problem first. These mining computers use tons of electricity to power their computers. This expensive process earns miners a reward in brand crypto plus fees paid by each user for their transactions'
                }
            ]
        },
        {
            letter: 'I',
            words: [

                {
                    title: 'ICO - Initial Coin Offering',
                    text: 'Initial Coin Offering or ICO is defined as a time-sensitive process when a new cryptocurrency or token generally becomes available for the public to invest in. Also called an “Initial Token Offering” or “ITO” and “Token Generation Event” or “TGE”. An ICO can be made for cryptocurrencies that are still in the idea stage, or are already built and ready for distribution. People invest their money in an ICO hoping that they will later be worth many times more that what was paid. For example, Ethereum sold their coins in their 2014 ICO for $0.40 and in 2017 the coins were worth over $400 each. The difference between an ICO and ITO is what people are investing in: An ICO distributes coins, which are another form of money. An ITO distributes tokens, which are a digital unit designed to provide access to a system. Tokens are not designed as a store of value, instead they have programmable potential built in. In other words, new software can be programmed into them.'
                }
            ]
        },
        {
            letter: 'J',
            words: [

                {
                    title: 'JOMO',
                    text: 'JOMO is short for Joy of Missing Out. This is the pleasure of doing what you are doing and not worrying about anything worthwhile you might be missing out on.'
                }
            ]
        },
        {
            letter: 'K',
            words: [

                {
                    title: 'KYC',
                    text: 'Know Your Customer or KYC is defined as a customer identification process required by law for financial organizations. Criminals who make illegally earned money, try to make their money appear legally earned. This is known as money-laundering and is often done to hide their money from the government. KYC requires all customers provide identification and sometimes answer personal questions before they can put their money into banks, investing services and other financial organizations.'
                }
            ]
        },
        {
            letter: 'L',
            words: [
                {
                    title: 'Ledger',
                    text: 'A ledger is a book or other collection of records in which a person, business, or other group records how much money it receives and spends.'
                },
                {
                    title: 'Leverage',
                    text: 'Leverage is increased investment power through margin. Margin is a borrowed asset (stocks or cryptocurrencies), usually from the financial services company you are investing with, that allows you to make larger investments in the hopes of making even more money. Leverage allows the investor to control much more assets than he actually owns giving him the opportunity to make or lose more money.'
                }
            ]
        },
        {
            letter: 'M',
            words: [
                {
                    title: 'Margin trading',
                    text: 'Margin trading describes a way of investing where you use margin. Margin increases your investment power. Margin is a borrowed asset (stocks or cryptocurrencies), usually from the financial services company you are investing with, that allows you to make larger investments in the hopes of making even more money. This advantage is known as leverage. The borrowed assets aren’t free, you must pay back interest on each transaction involving margins. Margin allows the investor to control much more assets than he actually owns giving him the opportunity to make or lose more money.'
                },
                {
                    title: 'Market Capitalization',
                    text: 'Market capitalization or Market Cap is defined as a way to rank the value and size of an asset (stock, cryptocurrency, etc.). This is calculated by multiplying the total number of coins by the latest price. To get market cap, the total supply (of a stock or cryptocurrency) is multiplied by the price. For example, if bitcoin is worth $4,000 and there are 16,500,000 coins in existence, that means its market cap is $66,000,000,000 or 66 billion dollars.'
                },
                {
                    title: 'Mining',
                    text: 'Mining is defined as the process of using computer power to solve a complex math problem, review and verify information, and create a new recording to be added to the blockchain. Miners often purchase very expensive, specially designed computers to increase their chances of solving the math problem first and pay massive electricity bills to power their computers. With over 1,500 cryptocurrencies and many more being created each month, many new interesting ways of maintaining the blockchain are regularly being explored and discovered.'
                },
                {
                    title: 'Mining Pool',
                    text: 'Mining pool is defined as a group of people who combine their computing power to solve a complex math problem on the blockchain for a reward. People join a mining pool to increase their chances of solving the blockchain math problem so they can earn a reward of transaction fees and new coins. Once the reward is won, it is split among all of the members of the group. In a pool, you often win the reward frequently but because it is shared, the payout is smaller.'
                }
            ]
        },
        {
            letter: 'N',
            words: [

                {
                    title: 'Node',
                    text: 'Node is defined as any computing device (computer, phone, etc.) that is participating in a network by way of receiving and sending data. Cryptocurrencies are supported by a network of computers each keeping a digital record of the data known as a blockchain. A computer, a phone, or any other computing device that can receive, transmit, and/or contribute to the blockchain is a node.'
                }
            ]
        },
        {
            letter: 'O',
            words: [
                {
                    title: 'Oracle',
                    text: 'Oracles provide external data to smart contracts that operate on blockchain technology. Since blockchains and smart contracts are closed systems (where there are rigid processes for connecting to external data sources), oracles present a way of securely providing off-chain data to a blockchain network’s on-chain environment. They are essentially a form of communication between the outside world and the world of blockchain. There are a few different types of oracles that we’ll discuss, and we’ll cover the potential challenges that oracles face within their role of executing smart contracts. Blockchains and smart contracts cannot access data from outside of their network. In order to know what to do, a smart contract often needs access to in- formation from the outside world that is relevant to the contractual agreement, in the form of electronic data, also referred to as oracles. These oracles are services that send and verify real world occurrences and submit this information to smart contracts, triggering state changes on the blockchain.'
                },
                {
                    title: 'OTC',
                    text: 'Over The Counter is defined as a transaction made outside of an exchange. Often abbreviated as OTC, these transactions are slower and cannot be programmed like transactions on an exchange. The disadvantage of transactions on an exchange is that large transactions shift the price. Let’s say Johnny is selling his bitcoin for $10,000, Bill is selling his for $11,000, Alice is selling hers for $12,000, and so on. A big purchase will clear out Johnny, Bill, Alice and the rest of the sellers causing an increased price. Increased prices means a higher cost for big buyers. The advantage of OTC purchases are that they are not as visible as those on an exchange and will likely not shift the price at all. Bitcoin ATMs, payment processors are two ways you can make OTC purchases.'
                }
            ]
        },
        {
            letter: 'P',
            words: [
                {
                    title: 'POS - Proof of Stake',
                    text: 'Proof of Stake or PoS is defined as a process for achieving consensus and building on a digital record known as a blockchain. With PoS, users put up a collateral of tokens (or a “stake”) and use a process that is more energy and cost-efficient than previous solutions. Imagine the blockchain as a digital book of records. Every page in that book can only store X amount of information. So we create new pages to store more information. Those pages are blocks in the blockchain. The process of creating new blocks, recording and verifying information is all a part of mining. With Proof of Stake, users can participate after depositing and risking a certain amount of their crypto. This is known as a “stake”. Users cannot spend or move their stake. If they are caught recording false information or doing something against the rules, they risk forfeiting their entire stake. People who provide a stake are known as “validators”. Validators are willing to endure the cost and risks of staking for the chance to earn transaction fees paid by users of the system. Validators earn these fees whenever they are selected to record and verify information. Validators are selected at random but can increase their chances and their reward size by staking a larger amount. Proof of Stake systems are used for cryptocurrencies that have all of their coins released in the beginning unlike in Proof of Work systems, where new coins are regularly created and rewarded'
                },
                {
                    title: 'POW - Proof of Work',
                    text: 'Proof of Work or PoW is defined as a process for achieving consensus and building on a digital record known as a blockchain. With PoW, users compete with each other via their computers to solve a puzzle. Imagine the blockchain as a digital book of records. Every page in that book can only store X amount of information. So we create new pages to store more information. Those pages are blocks in the blockchain. And creating new blocks, recording and verifying information is all a part of mining. With Proof of Work, computers compete to solve a tough math problem. The first computer that does this is allowed to create new blocks and record information. Because mining requires computer power, people do this work in return for money. The first computer to solve this problem can record information earning them a reward in brand new digital money plus fees paid for each transaction. Proof of Work systems are used for cryptocurrencies that regularly create and release their coins, unlike in Proof of Stake systems that have all of their coins released in the beginning.'
                }
            ]
        },
        {
            letter: 'Q',
            words: [
                {
                    title: 'QR Code',
                    text: 'QR code is short for “Quick Response code”, and is defined as a type of barcode in the shape of a square. These barcodes can be scanned by smartphones and will display information. These barcodes are a scannable box that provide fast access to things like a website, contact data, etc. For cryptocurrencies, QR codes are a quick way to enter a public address so cryptocurrency can be sent.'
                }
            ]
        },
        {
            letter: 'R',
            words: [

                {
                    title: 'Rekt',
                    text: 'Rekt is defined as completely destroyed and ruined. In cryptocurrency, it would mean total financial loss. It is an intentional misspelling of “wrecked”. Rekt is an online gaming phrase which meant someone was severely beaten by an opponent. In cryptocurrency, rekt is typically used when a person loses a lot of money.'
                }
            ]
        },
        {
            letter: 'S',
            words: [

                {
                    title: 'Smart Contract',
                    text: 'Smart contract is defined as an agreement to exchange goods, services, or money that will automatically execute, without third party oversight, so long as established criteria are met. In cryptocurrencies like Ethereum, contracts are called “smart contracts” because they are programmed to automatically do something. Smart contracts have the ability to receive, store, and send cryptocurrencies. Once they receives money, they will automatically do whatever they were programmed to do like sending money. When the smart contract has completed its task, it shuts down.'
                }
            ]
        },
        {
            letter: 'T',
            words: [
                {
                    title: 'Token',
                    text: 'A token is defined as something that represents value, services, or a product.There are three main types of tokens built with blockchain technology: A utility token that provides access to a product or service including software, digital content, etc. A security token that represents a real-world, physical asset. An equity token that represents partial ownership in a company. All three types of tokens are bought and sold with the hope of gaining a profit. The words “crypto asset” and “digital asset” can also be used to describe tokens.'
                }
            ]
        },
        {
            letter: 'U',
            words: [
                {
                    title: 'Utility Token',
                    text: 'Utility token is defined as a digital unit that provides exclusive access to a product or service. The utility token provides access in a way similar a ticket providing access to a sporting event. Similar to a token in a kid’s arcade, utility tokens are designed to provide access to a system. Unlike coins or currency, they are not designed as a store of value. Instead they have programmable potential built in. In other words, utility tokens are designed so programmers can build software around or in them and users can interact with the software using the tokens.'
                }
            ]
        },
        {
            letter: 'V',
            words: [
                {
                    title: 'Validator',
                    text: 'A blockchain validator is someone who is responsible for verifying transactions on a blockchain. Once transactions are verified, they are added to the distributed ledger.'
                }
            ]
        },
        {
            letter: 'W',
            words: [
                {
                    title: 'Wallet',
                    text: 'Wallet is defined as software that interacts with the blockchain and lets users receive and send their digital money. Blockchain wallets don’t actually store the money, instead they lock away access. The only way to get access to the money is by providing some type of password. Typically those passwords are called a “key” and they are a long string of letters and numbers. There are many types of wallets, both physical and digital, each with their own advantages and disadvantages. Typically physical wallets offer more security features but their drawback is that they take longer to access your crypto.'
                },
                {
                    title: 'Whale',
                    text: 'Whales are defined as people or organizations that have lots of money to buy and sell huge quantities of an asset, such as cryptocurrency. Their ability to move large amounts gives them the potential to manipulate prices. Because whales have so much money, when they buy or sell an asset, they directly and/or indirectly affect the price.'
                }
            ]
        },
        {
            letter: 'X',
            words: [
                {
                    title: 'XRP',
                    text: 'Ripple is a cryptocurrency with technology that allows organizations such as banks and companies to securely and instantly send money at almost no cost.'
                }
            ]
        },
        {
            letter: 'Y',
            words: [
                {
                    title: 'Yield',
                    text: 'In financial terms, yield is used to describe a certain amount earned on a security, over a particular period of time. It refers to the interest or dividend earned on debt or equity, respectively, and is conventionally expressed annually as a percentage based on the current market value or face value of the security.'
                }
            ]
        },
        {
            letter: 'Z',
            words: [
                {
                    title: 'Zero Confirmation Transaction',
                    text: 'A zero confirmation transaction is defined as an exchange that has not yet been recorded and verified on the blockchain. Instead the seller immediately assumes he received his money and delivers what was sold. A blockchain can be compared to a digital book that can record anything where each page in that book is known as a block. The blockchain is simultaneously maintained by a network of computers who must all agree on the data. Any bad actor who wants to manipulate the blockchain would need to have at least 51% of the computing power of the entire network to make changes. In a big blockchain like bitcoin, that’s incredibly expensive and difficult. After sending data to the blockchain, you have to wait for one of the computers maintaining the network to record and verify your data into a block. Because blocks are connected to each other, every block confirms all prior blocks. That means the longer the blockchain gets, the more secure earlier blocks are. When using bitcoin, it is recommended you wait for at least 6 confirmations (5 blocks recorded after yours) before considering your transaction is permanent. After 6 blocks, there is less than a 0.1% chance your data will ever be altered. The first confirmation comes when a block records your data. Every block recorded afterwards is counted as an additional confirmation.'
                }
            ]
        },

    ]

    return (
        <Box d="flex" flexWrap="wrap" justifyContent="center" m="4">
            {letters.map((letter) => {
                return (
                    <CryptoDictionaryLetterSection letter={letter.letter} words={letter.words} />
                )
            })}
        </Box >
    );
};

export default CryptoDictionary;
