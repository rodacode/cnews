export const LOAD_TOP_TEN_COINS_PENDING = "LOAD_TOP_TEN_COINS_PENDING";
export const LOAD_TOP_TEN_COINS_SUCCESS = "LOAD_TOP_TEN_COINS_SUCCESS";
export const LOAD_TOP_TEN_COINS_FAILED = "LOAD_TOP_TEN_COINS_FAILED";
export const LOAD_NEWS_PENDING = "LOAD_NEWS_PENDING";
export const LOAD_NEWS_SUCCESS = "LOAD_NEWS_SUCCESS";
export const LOAD_NEWS_FAILED = "LOAD_NEWS_FAILED";

export const loadTopTenCoinsPending = () => ({
  type: LOAD_TOP_TEN_COINS_PENDING,
});

export const loadTopTenCoinsSuccess = (coins) => ({
  type: LOAD_TOP_TEN_COINS_SUCCESS,
  payload: coins,
});

export const loadTopTenCoinsFailed = (error) => ({
  type: LOAD_TOP_TEN_COINS_FAILED,
  payload: error,
});

export const loadNewsPending = () => ({
  type: LOAD_NEWS_PENDING,
});

export const loadNewsSuccess = (news) => ({
  type: LOAD_NEWS_SUCCESS,
  payload: news,
});

export const loadNewsFailed = (error) => ({
  type: LOAD_NEWS_FAILED,
  payload: error,
});

