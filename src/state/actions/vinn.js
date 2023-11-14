import * as types from './types';

const actions = {};

actions.vinnInRequest = (number) => {
  return {
    type: types.VINN_REQUEST,
    payload: number,
  };
};

actions.vinInSuccess = (number) => {
  return {
    type: types.VINN_SUCCESS,
    payload: number,
  };
};

actions.vinInFailure = (number) => {
  return {
    type: types.VINN_FAILURE,
    payload: number
  };
};

export { actions };