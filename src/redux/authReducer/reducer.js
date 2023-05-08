import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  POST_USER_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, token: payload, isAuth: true };
    }
    case LOGIN_ERROR: {
      return { ...state, isAuth: false, isError: true, isLoading: false };
    }
    case POST_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case POST_USER_ERROR:
      return { ...state, isError: true };

    default: {
      return state;
    }
  }
};