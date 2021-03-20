
import {createStore, compose} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

import {
  LOAD_USER_DATA_PENDING,
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA_FAILED,

} from "../actions";

export const initialState = {
  user: [],
  news:[{title:"DeFi wars heat up as Curve Finance TVL hits $3.99B, surpassing Uniswap", text:"Curve Finance has surpassed Uniswap’s total value locked, a sign that competition between DeFi protocols is heating up.", url:"https://cointelegraph.com/news/defi-wars-heat-up-as-curve-finance-tvl-hits-3-99b-surpassing-uniswap", img:"https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvY2ZhNzcyYjItYmIyOC00ZDMwLWJkNWMtOGQyN2UyNWIxYWI0LmpwZw==.jpg"}],
  coins:[
    {
      id: "1",
      name: "🦄 Uniswap",
      tokenName:"UNI",
      imgSrc:"https://images.ctfassets.net/hfgyig42jimx/4vKMff1E9iOT9hcOMHzIOy/223563ab1f6a9c6e80012301e0118462/Uniswap_banner.png",
      tokenName:"UNI",
      coinGeckoId:"uniswap",
      description: "UNI is the governance token for Uniswap, an Automated Market Market DEX on the Ethereum blockchain. The UNI token allows token holders to participate in the governance of the protocol. Key decisions such as usage of the treasury or future upgrades can be decided through a governance vote.El precio de Uniswap (UNI) hoy es de 20,31 US$ con un volumen de comercio de 1.551.909.834 US$ en 24 horas. El precio ha subido a 0.9% en las últimas 24 horas. Tiene una cantidad en circulación de 300 millones monedas y una cantidad máxima de 1 mil millones monedas. Uniswap (v2) es el mercado más activo que está realizando operaciones con esta divisa.",
      founders: [{name: "George Carlin", imgSrc:"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg",twitter:"https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/",tweeterAlias:"@shshaha"}],
      team:[{name: "George Carlin", imgSrc:"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter:"https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/"}],
      newsList:[{title:"DeFi wars heat up as Curve Finance TVL hits $3.99B, surpassing Uniswap", text:"Curve Finance has surpassed Uniswap’s total value locked, a sign that competition between DeFi protocols is heating up.", url:"https://cointelegraph.com/news/defi-wars-heat-up-as-curve-finance-tvl-hits-3-99b-surpassing-uniswap", img:"https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvY2ZhNzcyYjItYmIyOC00ZDMwLWJkNWMtOGQyN2UyNWIxYWI0LmpwZw==.jpg"}],
      tweeterAlias:"Uniswap"
    },
    {
      id: "2",
      name: "Cardano",
      tokenName:"CAD",
      imgSrc:"https://s3.cointelegraph.com/storage/uploads/view/a7872fcc56858227ffa183256a5d55e1.png",
      description: "A great coin founded by blabalbalabalbalab hahaha ahaha ahhaha",
      founders: [{name: "George Carlin", imgSrc:"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg",twitter:"https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/",tweeterAlias:"@shshaha"}],
      team:[{name: "George Carlin", imgSrc:"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter:"https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/"}],
      newsList:[{title:"El dia de la marmota", text:"going foward flfld eklekelkskajkajakj aakjakjakaj akjkjrrosdn slkjrudhe sljdr fmdn dnddd ss sksjs  ssj"}],
      tweeterAlias:"@shshaha"
    },
    {
      id: "3",
      name: "Polka Dot",
      tokenName:"DOT",
      imgSrc:"https://images.ctfassets.net/hfgyig42jimx/4vKMff1E9iOT9hcOMHzIOy/223563ab1f6a9c6e80012301e0118462/Uniswap_banner.png",
      description: "A great coin founded by blabalbalabalbalab hahaha ahaha ahhaha",
      founders: [{name: "George Carlin", imgSrc:"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg",twitter:"https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/",tweeterAlias:"@shshaha"}],
      team:[{name: "George Carlin", imgSrc:"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter:"https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/"}],
      newsList:[{title:"DeFi wars heat up as Curve Finance TVL hits $3.99B, surpassing Uniswap", text:"Curve Finance has surpassed Uniswap’s total value locked, a sign that competition between DeFi protocols is heating up.", url:"https://cointelegraph.com/news/defi-wars-heat-up-as-curve-finance-tvl-hits-3-99b-surpassing-uniswap", img:"https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDIvY2ZhNzcyYjItYmIyOC00ZDMwLWJkNWMtOGQyN2UyNWIxYWI0LmpwZw==.jpg"}],
      tweeterAlias:"@shshaha"
    },
    {
      id: "4",
      name: "BITCOIN",
      tokenName:"BTC",
      imgSrc:"https://logos-marcas.com/wp-content/uploads/2020/08/Bitcoin-Logo.png",
      description: "A great coin founded by blabalbalabalbalab hahaha ahaha ahhaha",
      founders: [{name: "George Carlin", imgSrc:"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg",twitter:"https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/",tweeterAlias:"@shshaha"}],
      team:[{name: "George Carlin", imgSrc:"https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg", twitter:"https://twitter.com/3984239/", linkedin: "https://linkedin.com/2982928/"}],
      newsList:[{title:"El dia de la marmota", text:"going foward flfld eklekelkskajkajakj aakjakjakaj akjkjrrosdn slkjrudhe sljdr fmdn dnddd ss sksjs  ssj"}],
      tweeterAlias:"@shshaha"
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
export const wrapper = createWrapper(makeStore, {debug: true});