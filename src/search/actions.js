import * as actions from './constants';
import api from '../services/searchApi';

export function getResults() {
  return dispatch => {
    dispatch({ type: actions.FETCHING_RESULTS });

    api.get()
      .then(results => {
        dispatch({ type: actions.FETCHED_RESULTS, payload: results });
      })
      .catch(error => {
        dispatch({ type: actions.FETCHED_RESULTS_ERROR, payload: error });
      });
  };
}
