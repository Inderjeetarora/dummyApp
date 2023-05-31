import { combineReducers } from "redux";

import todoReducer from "./todo/reducer";
import AddReducer from "./AddRecord/reducer"
import GETDATAReducer from "./GetData/reducer"

const rootReducer = combineReducers({
  todo: todoReducer,
  response_add: AddReducer,
  get_data: GETDATAReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;