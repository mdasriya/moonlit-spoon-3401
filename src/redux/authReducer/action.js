import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, POST_USER_ERROR, POST_USER_REQUEST, POST_USER_SUCCESS } from "./actionType";
import axios from "axios";


//log in
export const login = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  console.log("check")
  return axios
    .get(`https://powerful-blue-smock.cyclic.app/users`)
    .then((response) => {
      // console.log(response.data);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data});
    })
    .catch((err) => dispatch({ type: LOGIN_ERROR }));
};



//sign up
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
