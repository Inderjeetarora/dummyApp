import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
  } from "./actionTypes";
  
  import {
    GetRequest,
    Getuccess,
    GetSuccessPayload,
    GetFailure,
    GetFailurePayload,
  } from "./types";
  
  export const fetchGetRequest = (): GetRequest => ({
    type: GET_REQUEST,
  });
  
  export const fetchGetSuccess = (
    payload: GetSuccessPayload
  ): Getuccess => ({
    type: GET_SUCCESS,
    payload,
  });
  
  export const fetchGetFailure = (
    payload: GetFailurePayload
  ): GetFailure => ({
    type: GET_FAILURE,
    payload,
  });