import * as actions from './constants';
import searchApi from '../services/searchApi';


export function getSearchResults(search) {
  return dispatch => {
    searchApi.getSearch({ search })
      .then(results => {
        dispatch({type: actions.GOT_SEARCH_RESULTS, payload: results})
      });
  };
}
