import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, POST_USER_ERROR, POST_USER_REQUEST, POST_USER_SUCCESS } from "./actionType";
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


export const signUp = (newUser) => (dispatch) => {
  dispatch({ type: POST_USER_REQUEST });
  return axios
    .post(`https://powerful-blue-smock.cyclic.app/users`, newUser)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_USER_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_USER_ERROR });
    });
};


