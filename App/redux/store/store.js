import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import combineReducers from "../reducers/rootReducers";

export const store = createStore(combineReducers, applyMiddleware(ReduxThunk));


