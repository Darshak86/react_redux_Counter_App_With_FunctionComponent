import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";


// import combineReducers from "../reducers/rootReducers";
// export const store = createStore(combineReducers, applyMiddleware(ReduxThunk));


 import counterReducer from "../reducers/reducers";
 export const store = createStore(counterReducer, applyMiddleware(ReduxThunk));
