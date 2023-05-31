import {
    FETCH_ADD_REQUEST,
    FETCH_ADD_SUCCESS,
    FETCH_ADD_FAILURE,
  } from "./actionTypes";
  
  import { AddActions, AddState } from "./types";
  
  

  const initialState: AddState = {
    pending: false,
    response_add: null,
    error: null,
  };
  
  export default (state = initialState, action: AddActions) => {
    switch (action.type) {
      case FETCH_ADD_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_ADD_SUCCESS:
        return {
          ...state,
          pending: false,
          response_add: action.payload.response_add,
          error: null,
        };
      case FETCH_ADD_FAILURE:
        return {
          ...state,
          pending: false,
          todos: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };