import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAILURE,
} from "./actionTypes";


export interface IGETRESPONSE {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface GETState {
  pending: boolean;
  get_data:IGETRESPONSE[];
  error: string | null;
}

export interface GetSuccessPayload {
  get_data: string;
}

export interface GetFailurePayload {
  error: string;
}

export interface GetRequest {
  type: typeof GET_REQUEST;
}

export type Getuccess = {
  type: typeof GET_SUCCESS;
  payload: GetSuccessPayload;
};

export type GetFailure = {
  type: typeof GET_FAILURE;
  payload: GetFailurePayload;
};

export type Getctions =
  | GetRequest
  | Getuccess
  | GetFailure;