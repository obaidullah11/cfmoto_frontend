import * as types from './types';

const actions = {};

actions.signUpRequest = (user) => {
  return {
    type: types.SIGNUP_REQUEST,
    payload: user,
  };
};

actions.signUpSuccess = (user) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: user,
  };
};

actions.signUpFailure = (user) => {
  return {
    type: types.SIGNUP_FAILURE,
    payload: user
  };
};

//////////////////////////////////////////////SIGNIN/////////////////////////////////

actions.signInRequest = (user) => {
  return {
    type: types.SIGNIN_REQUEST,
    payload: user,
  };
};

actions.signInSuccess = (user) => {
  return {
    type: types.SIGNIN_SUCCESS,
    payload: user,
  };
};

actions.signInFailure = (user) => {
  return {
    type: types.SIGNIN_FAILURE,
    payload: user
  };
};

actions.logOut = () => {
  return {
    type: types.LOGOUT,
  };
};

export { actions };