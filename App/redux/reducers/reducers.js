import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/actionTypes";

const counterInitialState = {
  counter: 0
};

export default function counterReducer (state = counterInitialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
