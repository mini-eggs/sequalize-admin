import { createStore, combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Models from "../reducers/models";

export default createStore(combineReducers({ Models }), applyMiddleware(Thunk));
