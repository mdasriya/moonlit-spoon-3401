import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
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
      return { ...state, isAuth: false, isError: true,isLoading:false };
    }

    default: {
      return state;
    }
  }
};
