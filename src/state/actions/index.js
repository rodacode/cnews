export const LOAD_USER_DATA_PENDING = "LOAD_USER_DATA_PENDING";
export const LOAD_USER_DATA_SUCCESS = "LOAD_USER_DATA_SUCCESS";
export const LOAD_USER_DATA_FAILED = "LOAD_USER_DATA_FAILED";


export const loadUserDataPending = () => ({
  type: LOAD_USER_DATA_PENDING,
});

export const loadUserDataSuccess = (DATA) => ({
  type: LOAD_USER_DATA_SUCCESS,
  payload: DATA,
});

export const loadUserDataFailed = (error) => ({
  type: LOAD_USER_DATA_FAILED,
  payload: error,
});

