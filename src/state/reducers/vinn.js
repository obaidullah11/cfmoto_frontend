import {
    VINN_REQUEST,
    VINN_SUCCESS,
    VINN_FAILURE
  } from '../actions/types';
  
  const vinnData={};

  export const vinnReducer = (state = { inPromise: false }, action) => {
    console.log("action================",action)

    const { type, payload } = action;
    switch (type) {
      case VINN_REQUEST:
        return { ...state, inPromise: true };
  
      case VINN_SUCCESS:
        return { ...state, ...payload, inPromise: false };
  
      case VINN_FAILURE:
        return { ...state, ...payload, inPromise: false };

      default:
        return state;
    }
  };