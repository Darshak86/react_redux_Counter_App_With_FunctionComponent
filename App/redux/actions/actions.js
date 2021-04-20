import {INCREASE_COUNTER, DECREASE_COUNTER} from './actionTypes';

export const increase = () => ({
  type: INCREASE_COUNTER,
});

export const decrease = () => ({
  type: DECREASE_COUNTER,
});
