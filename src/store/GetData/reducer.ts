import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
} from "./actionTypes";

import { Getctions, GETState } from "./types";

const initialState: GETState = {
  pending: false,
  get_data: [],
  error: null,
};

export default (state = initialState, action: Getctions) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.get_data,
        error: null,
      };
    case GET_FAILURE:
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