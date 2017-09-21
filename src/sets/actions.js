/* SETS ACTIONS */
import * as actions from './constants';
import api from '../services/setsApi';

export function getAllSets() {
  return dispatch => {
    dispatch({type: actions.FETCHING_SETS});
    api.getAllSets()
      .then(sets => {
        dispatch({type: actions.FETCHED_SETS, payload: sets});
      })
      .catch(error => {
        dispatch({type: actions.FETCHED_SETS_ERROR, payload: error});
      });
  };
}

export function addSet() {
  return dispatch => {
    dispatch({type: actions.ADDING_SETS});
    api.addSet()
      .then(set => {
        dispatch({type: actions.ADDED_SETS, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.ADDED_SETS_ERROR, payload: error});
      });
  }; 
}

export function updateSet(id) {
  return dispatch => {
    dispatch({type: actions.UPDATING_SETS});
    api.updateSet(id)
      .then(set => {
        dispatch({type: actions.UPDATED_SETS, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.UPDATED_SETS_ERROR, payload: error});
      });
  }; 
}

export function deleteSet(id) {
  return dispatch => {
    dispatch({type: actions.REMOVING_SETS});
    api.deleteSet(id)
      .then(() => {
        dispatch({type: actions.REMOVED_SETS, payload: id});
      })
      .catch(error => {
        dispatch({type: actions.REMOVED_SETS_ERROR, payload: error});
      });
  }; 
}