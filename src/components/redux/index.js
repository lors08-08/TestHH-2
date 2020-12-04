import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger/src";
import listing from "./listing";

const rootReducer = combineReducers({
  listing
});
const index = createStore(rootReducer, applyMiddleware(thunk, logger));

export default index