
import { createStore, compose } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { initialState } from '../state';
import {
  LOAD_TOP_TEN_COINS_PENDING,
  LOAD_TOP_TEN_COINS_SUCCESS,
  LOAD_TOP_TEN_COINS_FAILED,
  LOAD_NEWS_PENDING,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILED,
} from "../actions";


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_TOP_TEN_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TOP_TEN_COINS_SUCCESS:
      return {
        ...state,
        topTenCoins: action.payload,
        isLoading: false,
      };
    case LOAD_TOP_TEN_COINS_FAILED:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };
    case LOAD_NEWS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isLoading: false,
      };
    case LOAD_NEWS_FAILED:
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