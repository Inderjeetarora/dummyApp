import {
    FETCH_ADD_REQUEST,
    FETCH_ADD_SUCCESS,
    FETCH_ADD_FAILURE,
  } from "./actionTypes";
  
  import {
    FetchAddRequest,
    FetchAddSuccess,
    FetchAddSuccessPayload,
    FetchAddFailure,
    FetchAddFailurePayload,
  } from "./types";
  
  export const fetchAddRequest = (): FetchAddRequest => ({
    type: FETCH_ADD_REQUEST,
  });
  
  export const fetchAddSuccess = (
    payload: FetchAddSuccessPayload
  ): FetchAddSuccess => ({
    type: FETCH_ADD_SUCCESS,
    payload,
  });
  
  export const fetchAddFailure = (
    payload: FetchAddFailurePayload
  ): FetchAddFailure => ({
    type: FETCH_ADD_FAILURE,
    payload,
  });