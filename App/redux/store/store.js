import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import {counterReducer} from "../reducers/reducers";

// const rootReducer = combineReducers({
//   counterReducer
// });

// export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  export const store = createStore(counterReducer);
