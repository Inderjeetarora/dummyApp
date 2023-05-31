import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getAddPending_ = (state: AppState) => state.response_add.pending;

const getAddResponse_ = (state: AppState) => state.response_add.response_add;

const getAddError_ = (state: AppState) => state.response_add.error;

export const getAddData = createSelector(getAddResponse_, (response_add) => response_add);

export const getAddPending = createSelector(
  getAddPending_,
  (pending) => pending
);

export const getAddError = createSelector(getAddError_, (error) => error);