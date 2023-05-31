import { get, post } from "./axiosBase";
import { IResponsePayload, IResponse } from "./AddRecord/types";
import { GETState } from "./GetData/types"

export const authAPI = {

  add_data: (data: IResponsePayload) =>
    post<IResponsePayload, IResponse>("users", data),

  getData_: () => get<GETState[]>("users?page=2"),

};
