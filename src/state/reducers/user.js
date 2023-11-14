import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from "../actions/types";

export const userReducer = (state = { inPromise: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return { ...state, inPromise: true };

    case SIGNUP_SUCCESS:
      return { ...state, ...payload, inPromise: false };

    case SIGNUP_FAILURE:
      return { ...state, ...payload, inPromise: false };

    case SIGNIN_REQUEST:
      return { ...state, inPromise: true };

    case SIGNIN_SUCCESS:
      return { ...state, ...payload, inPromise: false };

    case SIGNIN_FAILURE:
      return { ...state, ...payload, inPromise: false };

    case LOGOUT:
      return { inPromise: false, ...payload };

    default:
      return state;
  }
};
