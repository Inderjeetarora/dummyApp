import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const pending_status = (state: AppState) => state.get_data.pending;

const response_status = (state: AppState) => state.get_data.get_data;

const error_status = (state: AppState) => state.get_data.error;

export const get_data = createSelector(response_status, (response_add) => response_add);

export const pending_data = createSelector(
  pending_status,
  (pending) => pending
);

export const error_data = createSelector(error_status, (error) => error);