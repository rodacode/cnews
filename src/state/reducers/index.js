
import { createStore, compose } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import {
  LOAD_USER_DATA_PENDING,
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA_FAILED,

} from "../actions";

export const initialState = {
  user: [],
  news: [
    { "id": "26934513", "guid": "https://cointelegraph.com/news/nigeria-s-central-bank-not-discouraging-people-from-trading-crypto-says-governor", "published_on": 1616352265, "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png", "title": "Nigeria's central bank not discouraging people from trading crypto, says governor", "url": "https://cointelegraph.com/news/nigeria-s-central-bank-not-discouraging-people-from-trading-crypto-says-governor", "source": "cointelegraph", "body": "The governor of the Central Bank of Nigeria has seemingly softened his stance on crypto for individuals, if not banks.", "tags": "regulation|bitcoin regulation|central bank|africa|nigeria", "categories": "Fiat|Regulation|Trading", "upvotes": "0", "downvotes": "0", "lang": "EN", "source_info": { "name": "CoinTelegraph", "lang": "EN", "img": "https://images.cryptocompare.com/news/default/cointelegraph.png" } }, { "id": "26934505", "guid": "https://cointelegraph.com/news/selfkey-key-gains-450-after-defi-pivot-and-data-management-upgrades", "published_on": 1616348849, "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png", "title": "SelfKey (KEY) gains 450% after DeFi pivot and data management upgrades", "url": "https://cointelegraph.com/news/selfkey-key-gains-450-after-defi-pivot-and-data-management-upgrades", "source": "cointelegraph", "body": "The rollout of new identity management platforms and a pivot toward DeFi appear to have triggered a 450% in the price of SelfKey. ", "tags": "Identity|Identification", "categories": "Trading", "upvotes": "0", "downvotes": "0", "lang": "EN", "source_info": { "name": "CoinTelegraph", "lang": "EN", "img": "https://images.cryptocompare.com/news/default/cointelegraph.png" } }, { "id": "26934478", "guid": "https://cointelegraph.com/news/actionists-reinventing-art-as-it-ever-was-so-shall-it-ever-be-even-in-crypto", "published_on": 1616343180, "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png", "title": "Actionists reinventing art: As it ever was, so shall it ever be (even in crypto)", "url": "https://cointelegraph.com/news/actionists-reinventing-art-as-it-ever-was-so-shall-it-ever-be-even-in-crypto", "source": "cointelegraph", "body": "Tokenizing art could make paintings a more liquid vehicle for investment, engaging people who don’t have access to the high-end art market.", "tags": "Nonfungible Tokens|Art|Tokens|Auction", "categories": "Market|ICO", "upvotes": "0", "downvotes": "0", "lang": "EN", "source_info": { "name": "CoinTelegraph", "lang": "EN", "img": "https://images.cryptocompare.com/news/default/cointelegraph.png" } }, { "id": "26934467", "guid": "https://cointelegraph.com/news/bitcoin-s-new-use-case-a-report-card-for-how-the-us-handles-the-dollar", "published_on": 1616339640, "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png", "title": "Bitcoin’s new use case? A report card for how the US handles the dollar", "url": "https://cointelegraph.com/news/bitcoin-s-new-use-case-a-report-card-for-how-the-us-handles-the-dollar", "source": "cointelegraph", "body": "An important new role for the world’s first cryptocurrency as an inflation gauge — or just another fantasy of Bitcoin maximalists?", "tags": "United States|Federal Reserve|Dollar", "categories": "Fiat|BTC", "upvotes": "0", "downvotes": "0", "lang": "EN", "source_info": { "name": "CoinTelegraph", "lang": "EN", "img": "https://images.cryptocompare.com/news/default/cointelegraph.png" } }, { "id": "26934458", "guid": "https://cointelegraph.com/news/xrp-purchasers-back-ripple-arguing-that-it-is-not-a-security", "published_on": 1616335620, "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png", "title": "XRP purchasers back Ripple, arguing that it is not a security", "url": "https://cointelegraph.com/news/xrp-purchasers-back-ripple-arguing-that-it-is-not-a-security", "source": "cointelegraph", "body": "Breaking down the ongoing SEC v. Ripple case clarifies the crucial meaning of it for the whole crypto industry.", "tags": "", "categories": "XRP|Regulation", "upvotes": "0", "downvotes": "0", "lang": "EN", "source_info": { "name": "CoinTelegraph", "lang": "EN", "img": "https://images.cryptocompare.com/news/default/cointelegraph.png" } }, { "id": "26934444", "guid": "https://cointelegraph.com/news/ethereum-network-in-a-fee-spin-can-the-berlin-upgrade-save-the-day", "published_on": 1616329689, "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png", "title": "Ethereum network in a fee spin: Can the Berlin upgrade save the day?", "url": "https://cointelegraph.com/news/ethereum-network-in-a-fee-spin-can-the-berlin-upgrade-save-the-day", "source": "cointelegraph", "body": "The upcoming Berlin update contains EIPs aimed at reducing transaction costs, but it may not provide a long-term solution.", "tags": "Proof-of-Stake|Ethereum 2.0|layer2|Fees", "categories": "ETH", "upvotes": "0", "downvotes": "1", "lang": "EN", "source_info": { "name": "CoinTelegraph", "lang": "EN", "img": "https://images.cryptocompare.com/news/default/cointelegraph.png" } }, { "id": "26934438", "guid": "https://cointelegraph.com/news/bitcoin-price-slides-5-after-failing-to-break-60k-here-s-why", "published_on": 1616320208, "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png", "title": "Bitcoin price slides 5% after failing to break $60K — Here's why", "url": "https://cointelegraph.com/news/bitcoin-price-slides-5-after-failing-to-break-60k-here-s-why", "source": "cointelegraph", "body": "BTC dropped below $56,000 on Sunday as several bearish signs emerged. ", "tags": "bitcoin|BTC price|bitfinex|treasury yields", "categories": "BTC|Trading|Exchange", "upvotes": "0", "downvotes": "0", "lang": "EN", "source_info": { "name": "CoinTelegraph", "lang": "EN", "img": "https://images.cryptocompare.com/news/default/cointelegraph.png" } }],
  coins: [
    {
      "id": "bitcoin",
      "symbol": "btc",
      "name": "Bitcoin",
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      "current_price": 58733,
      "market_cap": 1095416808338,
      "market_cap_rank": 1,
      "fully_diluted_valuation": 1232817223136,
      "total_volume": 52801353317,
      "high_24h": 60301,
      "low_24h": 58208,
      "price_change_24h": -4.91912383,
      "price_change_percentage_24h": -0.00837,
      "market_cap_change_24h": 1812836544,
      "market_cap_change_percentage_24h": 0.16577,
      "circulating_supply": 18659500,
      "total_supply": 21000000,
      "max_supply": 21000000,
      "ath": 61712,
      "ath_change_percentage": -4.84795,
      "ath_date": "2021-03-13T20:49:26.606Z",
      "atl": 67.81,
      "atl_change_percentage": 86496.34433,
      "atl_date": "2013-07-06T00:00:00.000Z",
      "roi": null,
      "last_updated": "2021-03-20T21:10:03.204Z"
    },
    {
      "id": "ethereum",
      "symbol": "eth",
      "name": "Ethereum",
      "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      "current_price": 1836.39,
      "market_cap": 211427482851,
      "market_cap_rank": 2,
      "fully_diluted_valuation": null,
      "total_volume": 28196479088,
      "high_24h": 1881.18,
      "low_24h": 1812.5,
      "price_change_24h": 8.68,
      "price_change_percentage_24h": 0.47503,
      "market_cap_change_24h": 1310146963,
      "market_cap_change_percentage_24h": 0.62353,
      "circulating_supply": 115132203.499,
      "total_supply": null,
      "max_supply": null,
      "ath": 2042.93,
      "ath_change_percentage": -10.01851,
      "ath_date": "2021-02-20T12:24:12.315Z",
      "atl": 0.432979,
      "atl_change_percentage": 424460.35062,
      "atl_date": "2015-10-20T00:00:00.000Z",
      "roi": {
        "times": 40.79947430340859,
        "currency": "btc",
        "percentage": 4079.947430340859
      },
      "last_updated": "2021-03-20T21:10:09.888Z"
    },
    {
      "id": "binancecoin",
      "symbol": "bnb",
      "name": "Binance Coin",
      "image": "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
      "current_price": 267.41,
      "market_cap": 41324480727,
      "market_cap_rank": 3,
      "fully_diluted_valuation": 45603106667,
      "total_volume": 2622791854,
      "high_24h": 273.02,
      "low_24h": 262.83,
      "price_change_24h": 2.16,
      "price_change_percentage_24h": 0.81388,
      "market_cap_change_24h": 333617029,
      "market_cap_change_percentage_24h": 0.81388,
      "circulating_supply": 154533651.9,
      "total_supply": 170533651.9,
      "max_supply": 170533651.9,
      "ath": 339.94,
      "ath_change_percentage": -21.24234,
      "ath_date": "2021-02-19T23:41:54.286Z",
      "atl": 0.0398177,
      "atl_change_percentage": 672277.22585,
      "atl_date": "2017-10-19T00:00:00.000Z",
      "roi": null,
      "last_updated": "2021-03-20T21:09:53.036Z"
    },
    {
      "id": "tether",
      "symbol": "usdt",
      "name": "Tether",
      "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
      "current_price": 1,
      "market_cap": 39658847404,
      "market_cap_rank": 4,
      "fully_diluted_valuation": null,
      "total_volume": 82129839063,
      "high_24h": 1.01,
      "low_24h": 0.993943,
      "price_change_24h": 0.00008393,
      "price_change_percentage_24h": 0.00836,
      "market_cap_change_24h": 293329744,
      "market_cap_change_percentage_24h": 0.74514,
      "circulating_supply": 39519068861.4584,
      "total_supply": 39519068861.4584,
      "max_supply": null,
      "ath": 1.32,
      "ath_change_percentage": -24.3767,
      "ath_date": "2018-07-24T00:00:00.000Z",
      "atl": 0.572521,
      "atl_change_percentage": 74.76534,
      "atl_date": "2015-03-02T00:00:00.000Z",
      "roi": null,
      "last_updated": "2021-03-20T21:06:31.716Z"
    },
    {
      "id": "cardano",
      "symbol": "ada",
      "name": "Cardano",
      "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
      "current_price": 1.23,
      "market_cap": 39464712133,
      "market_cap_rank": 5,
      "fully_diluted_valuation": null,
      "total_volume": 4577351510,
      "high_24h": 1.33,
      "low_24h": 1.23,
      "price_change_24h": -0.09128633,
      "price_change_percentage_24h": -6.88997,
      "market_cap_change_24h": -2912240001.35614,
      "market_cap_change_percentage_24h": -6.87223,
      "circulating_supply": 31994548282.4539,
      "total_supply": 45000000000,
      "max_supply": null,
      "ath": 1.48,
      "ath_change_percentage": -16.38341,
      "ath_date": "2021-03-18T15:55:08.465Z",
      "atl": 0.01925275,
      "atl_change_percentage": 6316.27257,
      "atl_date": "2020-03-13T02:22:55.044Z",
      "roi": null,
      "last_updated": "2021-03-20T21:11:16.706Z"
    },
    {
      "id": "polkadot",
      "symbol": "dot",
      "name": "Polkadot",
      "image": "https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
      "current_price": 39.09,
      "market_cap": 38132918083,
      "market_cap_rank": 6,
      "fully_diluted_valuation": null,
      "total_volume": 1516390693,
      "high_24h": 40.02,
      "low_24h": 38.08,
      "price_change_24h": 0.531021,
      "price_change_percentage_24h": 1.37706,
      "market_cap_change_24h": 731003594,
      "market_cap_change_percentage_24h": 1.95446,
      "circulating_supply": 977153930.01992,
      "total_supply": 1058064240.75109,
      "max_supply": null,
      "ath": 42.25,
      "ath_change_percentage": -7.53,
      "ath_date": "2021-02-20T18:37:07.487Z",
      "atl": 2.7,
      "atl_change_percentage": 1348.43686,
      "atl_date": "2020-08-20T05:48:11.359Z",
      "roi": null,
      "last_updated": "2021-03-20T21:11:04.987Z"
    },
    {
      "id": "ripple",
      "symbol": "xrp",
      "name": "XRP",
      "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
      "current_price": 0.523891,
      "market_cap": 24006737515,
      "market_cap_rank": 7,
      "fully_diluted_valuation": null,
      "total_volume": 4608163170,
      "high_24h": 0.529712,
      "low_24h": 0.467906,
      "price_change_24h": 0.052887,
      "price_change_percentage_24h": 11.22862,
      "market_cap_change_24h": 2423665822,
      "market_cap_change_percentage_24h": 11.22948,
      "circulating_supply": 45838182316,
      "total_supply": 100000000000,
      "max_supply": null,
      "ath": 3.4,
      "ath_change_percentage": -84.58916,
      "ath_date": "2018-01-07T00:00:00.000Z",
      "atl": 0.00268621,
      "atl_change_percentage": 19397.00282,
      "atl_date": "2014-05-22T00:00:00.000Z",
      "roi": null,
      "last_updated": "2021-03-20T21:10:13.858Z"
    },
    {
      "id": "uniswap",
      "symbol": "uni",
      "name": "Uniswap",
      "image": "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604",
      "current_price": 32.44,
      "market_cap": 16810584472,
      "market_cap_rank": 8,
      "fully_diluted_valuation": 32336915577,
      "total_volume": 1098457872,
      "high_24h": 35.19,
      "low_24h": 32.12,
      "price_change_24h": -1.3144652,
      "price_change_percentage_24h": -3.89446,
      "market_cap_change_24h": -570627265.2498245,
      "market_cap_change_percentage_24h": -3.28301,
      "circulating_supply": 519857388.1320768,
      "total_supply": 1000000000,
      "max_supply": 1000000000,
      "ath": 35.19,
      "ath_change_percentage": -8.03792,
      "ath_date": "2021-03-20T03:34:13.711Z",
      "atl": 1.03,
      "atl_change_percentage": 3041.85767,
      "atl_date": "2020-09-17T01:20:38.214Z",
      "roi": null,
      "last_updated": "2021-03-20T21:10:07.045Z"
    },
    {
      "id": "litecoin",
      "symbol": "ltc",
      "name": "Litecoin",
      "image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
      "current_price": 201.99,
      "market_cap": 13472181524,
      "market_cap_rank": 9,
      "fully_diluted_valuation": null,
      "total_volume": 3941568848,
      "high_24h": 207.57,
      "low_24h": 200.22,
      "price_change_24h": -0.06234734,
      "price_change_percentage_24h": -0.03086,
      "market_cap_change_24h": 5539506,
      "market_cap_change_percentage_24h": 0.04114,
      "circulating_supply": 66696339.5153875,
      "total_supply": 84000000,
      "max_supply": null,
      "ath": 360.66,
      "ath_change_percentage": -43.89528,
      "ath_date": "2017-12-18T00:00:00.000Z",
      "atl": 1.15,
      "atl_change_percentage": 17513.09838,
      "atl_date": "2015-01-14T00:00:00.000Z",
      "roi": null,
      "last_updated": "2021-03-20T21:09:44.265Z"
    },
    {
      "id": "chainlink",
      "symbol": "link",
      "name": "Chainlink",
      "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
      "current_price": 30.3,
      "market_cap": 12554736657,
      "market_cap_rank": 10,
      "fully_diluted_valuation": 30288171798,
      "total_volume": 1141686888,
      "high_24h": 31.59,
      "low_24h": 29.87,
      "price_change_24h": 0.04318817,
      "price_change_percentage_24h": 0.14275,
      "market_cap_change_24h": 46780310,
      "market_cap_change_percentage_24h": 0.374,
      "circulating_supply": 414509556.43444455,
      "total_supply": 1000000000,
      "max_supply": 1000000000,
      "ath": 36.95,
      "ath_change_percentage": -17.85701,
      "ath_date": "2021-02-20T13:49:13.377Z",
      "atl": 0.148183,
      "atl_change_percentage": 20382.58786,
      "atl_date": "2017-11-29T00:00:00.000Z",
      "roi": null,
      "last_updated": "2021-03-20T21:11:28.129Z"
    }
  ],
  trendingCoins: [
    {
      "item": {
        "id": "ecomi",
        "name": "ECOMI",
        "symbol": "OMI",
        "market_cap_rank": 61,
        "thumb": "https://assets.coingecko.com/coins/images/4428/thumb/ECOMI.png?1557928886",
        "large": "https://assets.coingecko.com/coins/images/4428/large/ECOMI.png?1557928886",
        "score": 0
      }
    },
    {
      "item": {
        "id": "ethernity-chain",
        "name": "Ethernity Chain",
        "symbol": "ERN",
        "market_cap_rank": 221,
        "thumb": "https://assets.coingecko.com/coins/images/14238/thumb/ethernity_logo.png?1615189750",
        "large": "https://assets.coingecko.com/coins/images/14238/large/ethernity_logo.png?1615189750",
        "score": 1
      }
    },
    {
      "item": {
        "id": "wax",
        "name": "WAX",
        "symbol": "WAXP",
        "market_cap_rank": 144,
        "thumb": "https://assets.coingecko.com/coins/images/1372/thumb/WAX_Coin_Tickers_P_512px.png?1602812260",
        "large": "https://assets.coingecko.com/coins/images/1372/large/WAX_Coin_Tickers_P_512px.png?1602812260",
        "score": 2
      }
    },
    {
      "item": {
        "id": "harmony",
        "name": "Harmony",
        "symbol": "ONE",
        "market_cap_rank": 67,
        "thumb": "https://assets.coingecko.com/coins/images/4344/thumb/Y88JAze.png?1565065793",
        "large": "https://assets.coingecko.com/coins/images/4344/large/Y88JAze.png?1565065793",
        "score": 3
      }
    },
    {
      "item": {
        "id": "chiliz",
        "name": "Chiliz",
        "symbol": "CHZ",
        "market_cap_rank": 37,
        "thumb": "https://assets.coingecko.com/coins/images/8834/thumb/Chiliz.png?1561970540",
        "large": "https://assets.coingecko.com/coins/images/8834/large/Chiliz.png?1561970540",
        "score": 4
      }
    },
    {
      "item": {
        "id": "vesper-finance",
        "name": "Vesper Finance",
        "symbol": "VSP",
        "market_cap_rank": 325,
        "thumb": "https://assets.coingecko.com/coins/images/13527/thumb/vesper_logo.jpg?1609399927",
        "large": "https://assets.coingecko.com/coins/images/13527/large/vesper_logo.jpg?1609399927",
        "score": 5
      }
    },
    {
      "item": {
        "id": "chain-games",
        "name": "Chain Games",
        "symbol": "CHAIN",
        "market_cap_rank": 292,
        "thumb": "https://assets.coingecko.com/coins/images/12257/thumb/chain-logo-centered-500x500.png?1599617244",
        "large": "https://assets.coingecko.com/coins/images/12257/large/chain-logo-centered-500x500.png?1599617244",
        "score": 6
      }
    }
  ],
  selectedCoins: [
    {
      id: "1",
      name: "🦄 Uniswap",
      tokenName: "UNI",
      imgSrc: "https://images.ctfassets.net/hfgyig42jimx/4vKMff1E9iOT9hcOMHzIOy/223563ab1f6a9c6e80012301e0118462/Uniswap_banner.png",
      tokenName: "UNI",
      coinGeckoId: "uniswap",
      description: "UNI is the governance token for Uniswap, an Automated Market Market DEX on the Ethereum blockchain. The UNI token allows token holders to participate in the governance of the protocol. Key decisions such as usage of the treasury or future upgrades can be decided through a governance vote.El precio de Uniswap (UNI) hoy es de 20,31 US$ con un volumen de comercio de 1.551.909.834 US$ en 24 horas. El precio ha subido a 0.9% en las últimas 24 horas. Tiene una cantidad en circulación de 300 millones monedas y una cantidad máxima de 1 mil millones monedas. Uniswap (v2) es el mercado más activo que está realizando operaciones con esta divisa.",
      founders: [{ name: "George Carlin", imgSrc: "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter: "https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/", tweeterAlias: "@shshaha" }],
      team: [{ name: "George Carlin", imgSrc: "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter: "https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/" }],
      newsList: [{ title: "DeFi wars heat up as Curve Finance TVL hits $3.99B, surpassing Uniswap", text: "Curve Finance has surpassed Uniswap’s total value locked, a sign that competition between DeFi protocols is heating up.", url: "https://cointelegraph.com/news/defi-wars-heat-up-as-curve-finance-tvl-hits-3-99b-surpassing-uniswap", img: "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvY2ZhNzcyYjItYmIyOC00ZDMwLWJkNWMtOGQyN2UyNWIxYWI0LmpwZw==.jpg" }],
      tweeterAlias: "Uniswap"
    },
    {
      id: "2",
      name: "Cardano",
      tokenName: "CAD",
      imgSrc: "https://s3.cointelegraph.com/storage/uploads/view/a7872fcc56858227ffa183256a5d55e1.png",
      description: "A great coin founded by blabalbalabalbalab hahaha ahaha ahhaha",
      founders: [{ name: "George Carlin", imgSrc: "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter: "https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/", tweeterAlias: "@shshaha" }],
      team: [{ name: "George Carlin", imgSrc: "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter: "https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/" }],
      newsList: [{ title: "El dia de la marmota", text: "going foward flfld eklekelkskajkajakj aakjakjakaj akjkjrrosdn slkjrudhe sljdr fmdn dnddd ss sksjs  ssj" }],
      tweeterAlias: "@shshaha"
    },
    {
      id: "3",
      name: "Polka Dot",
      tokenName: "DOT",
      imgSrc: "https://images.ctfassets.net/hfgyig42jimx/4vKMff1E9iOT9hcOMHzIOy/223563ab1f6a9c6e80012301e0118462/Uniswap_banner.png",
      description: "A great coin founded by blabalbalabalbalab hahaha ahaha ahhaha",
      founders: [{ name: "George Carlin", imgSrc: "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter: "https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/", tweeterAlias: "@shshaha" }],
      team: [{ name: "George Carlin", imgSrc: "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter: "https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/" }],
      newsList: [{ title: "DeFi wars heat up as Curve Finance TVL hits $3.99B, surpassing Uniswap", text: "Curve Finance has surpassed Uniswap’s total value locked, a sign that competition between DeFi protocols is heating up.", url: "https://cointelegraph.com/news/defi-wars-heat-up-as-curve-finance-tvl-hits-3-99b-surpassing-uniswap", img: "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvY2ZhNzcyYjItYmIyOC00ZDMwLWJkNWMtOGQyN2UyNWIxYWI0LmpwZw==.jpg" }],
      tweeterAlias: "@shshaha"
    },
    {
      id: "4",
      name: "BITCOIN",
      tokenName: "BTC",
      imgSrc: "https://logos-marcas.com/wp-content/uploads/2020/08/Bitcoin-Logo.png",
      description: "A great coin founded by blabalbalabalbalab hahaha ahaha ahhaha",
      founders: [{ name: "George Carlin", imgSrc: "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter: "https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/", tweeterAlias: "@shshaha" }],
      team: [{ name: "George Carlin", imgSrc: "https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter: "https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/" }],
      newsList: [{ title: "El dia de la marmota", text: "going foward flfld eklekelkskajkajakj aakjakjakaj akjkjrrosdn slkjrudhe sljdr fmdn dnddd ss sksjs  ssj" }],
      tweeterAlias: "@shshaha"
    }
  ],

  isLoading: false,
  errors: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_USER_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_USER_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        offset: 0
      };
    case LOAD_USER_DATA_FAILED:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f

// create a makeStore function
const makeStore = context => createStore(reducer, initialState, compose(devtools));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });