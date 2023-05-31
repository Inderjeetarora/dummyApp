import {
  FETCH_ADD_REQUEST,
  FETCH_ADD_SUCCESS,
  FETCH_ADD_FAILURE,
} from "./actionTypes";

export interface IResponsePayload {
  name: string;
  job: string;
}

export interface IResponse {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}

export interface AddState {
  pending: boolean;
  response_add:string | null;
  error: string | null;
}

export interface FetchAddSuccessPayload {
  response_add: string;
}

export interface FetchAddFailurePayload {
  error: string;
}

export interface FetchAddRequest {
  type: typeof FETCH_ADD_REQUEST;
}

export type FetchAddSuccess = {
  type: typeof FETCH_ADD_SUCCESS;
  payload: FetchAddSuccessPayload;
};

export type FetchAddFailure = {
  type: typeof FETCH_ADD_FAILURE;
  payload: FetchAddFailurePayload;
};

export type AddActions =
  | FetchAddRequest
  | FetchAddSuccess
  | FetchAddFailure;