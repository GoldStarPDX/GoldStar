import * as actions from './constants';
import searchApi from '../services/searchApi';
import flashcardSetApi from '../services/flashcardSetApi';


export function getSearchResults(search) {
  return dispatch => {
    searchApi.getSearch({ search })
      .then(results => {
        dispatch({type: actions.GOT_SEARCH_RESULTS, payload: results});
      });
  };
}

export function getSetResults(id) {
  return dispatch => {
    flashcardSetApi.getflashcardSet(id)
      .then(set => {
        dispatch({ type: actions.GOT_SET_RESULTS, payload: set});
      });
  };
}
