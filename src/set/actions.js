/* SET ACTIONS */
import * as actions from './constants';
import api from '../services/setApi';

export function getSet(id) {
  return dispatch => {
    dispatch({type: actions.FETCHING_SET});
    api.getSet(id)
      .then(set => {
        dispatch({type: actions.FETCHED_SET, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.FETCHED_SET_ERROR, payload: error});
      });
  };
}

export function addCards(setId) {
  return dispatch => {
    dispatch({type: actions.ADDING_CARDTOSET});
    api.addCards(setId)
      .then(set => {
        dispatch({type: actions.ADDED_CARDTOSET, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.ADDED_CARDTOSET_ERROR, payload: error});
      });
  }; 
}

export function deleteCards(setId) {
  return dispatch => {
    dispatch({type: actions.REMOVING_CARDSFROMSET});
    api.deleteCards(setId)
      .then(() => {
        dispatch({type: actions.REMOVED_CARDSFROMSET, payload: setId});
      })
      .catch(error => {
        dispatch({type: actions.REMOVED_CARDSFROMSET_ERROR, payload: error});
      });
  }; 
}