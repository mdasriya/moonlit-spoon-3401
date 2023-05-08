import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";
import axios from "axios";

export const login = (anyNameObj) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`https://reqres.in/api/login`, anyNameObj)
    .then((response) => {
      console.log(response.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    })
    .catch((err) => dispatch({ type: LOGIN_ERROR }));
};
