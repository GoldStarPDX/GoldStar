import * as actions from './constants';

export function search(state = [], { type, payload }) {
  switch(type) {
    case actions.FETCHED_RESULTS:
      return payload;
    default:
      return state;
  }
}

export function error(state = null, { type, payload }) {
  switch (type) {
    case actions.FETCHED_RESULTS_ERROR:
      return payload;
    case actions.FETCHED_RESULTS:
      return null;
    default: 
      return state;
  }
}