import * as actions from './constants';

export default function results(state = [], {type, payload}) {
  switch(type){
    case actions.GOT_SEARCH_RESULTS:
      return payload;
    default:
      return state;
  }

}