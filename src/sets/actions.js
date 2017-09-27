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

export function addSet(set) {
  
  return dispatch => {
    dispatch({type: actions.ADDING_SET});
    api.addSet(set)
      .then(set => {
        dispatch({type: actions.ADDED_SET, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.ADDED_SET_ERROR, payload: error});
      });
  }; 
}

export function updateSet(id) {
  
  return dispatch => {
    dispatch({type: actions.UPDATING_SET});
    api.updateSet(id)
      .then(set => {
        dispatch({type: actions.UPDATED_SET, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.UPDATED_SET_ERROR, payload: error});
      });
  }; 
}

export function deleteSet(id) {
  
  return dispatch => {
    dispatch({type: actions.REMOVING_SET});
    api.deleteSet(id)
      .then(() => {
        dispatch({type: actions.REMOVED_SET, payload: id});
      },
      error => {
        dispatch({type: actions.REMOVED_SET_ERROR, payload: error});
      });
  }; 
}