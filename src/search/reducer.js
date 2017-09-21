import * as actions from './constants';

export function results(state = [], {type, payload}) {
  switch(type){
    case actions.GOT_SEARCH_RESULTS:
      return payload;
    default:
      return state;
  }
}

export function set(state = [], {type, payload}) {
  switch(type){
    case actions.GOT_SET_RESULTS:
      return payload;
    default:
      return state;
  }
}
