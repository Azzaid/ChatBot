import { combineReducers } from "redux"


import userReducer from "./user";
import globalAppStateReducer from "./glodalAppStateReducer";

const cardListReducer = combineReducers({
  user: userReducer,
  appState: globalAppStateReducer,
})

export default cardListReducer