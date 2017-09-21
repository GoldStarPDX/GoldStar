import * as actions from './constants';
import api from '../services/teacherSetApi';

export function getAllSets() {
  return dispatch => {
    dispatch({type: actions.FETCHING_TEACHERSETS});
    api.getAllSets()
      .then(sets => {
        dispatch({type: actions.FETCHED_TEACHERSETS, payload: sets});
      })
      .catch(error => {
        dispatch({type: actions.FETCHED_TEACHERSETS_ERROR, payload: error});
      });
  };
}

export function getSet(id) {
  return dispatch => {
    dispatch({type: actions.FETCHING_TEACHERSET});
    api.getAllSets(id)
      .then(set => {
        dispatch({type: actions.FETCHED_TEACHERSET, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.FETCHED_TEACHERSET_ERROR, payload: error});
      });
  };
}

export function addSet() {
  return dispatch => {
    dispatch({type: actions.ADDING_TEACHERSETS});
    api.addTeacherSet()
      .then(set => {
        dispatch({type: actions.ADDED_TEACHERSETS, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.ADDED_TEACHERSETS_ERROR, payload: error});
      });
  }; 
}

export function updateSet(id) {
  return dispatch => {
    dispatch({type: actions.UPDATING_TEACHERSETS});
    api.updateTeacherSet(id)
      .then(set => {
        dispatch({type: actions.UPDATED_TEACHERSETS, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.UPDATED_TEACHERSETS_ERROR, payload: error});
      });
  }; 
}

export function deleteSet(id) {
  return dispatch => {
    dispatch({type: actions.REMOVING_TEACHERSETS});
    api.deleteTeacherSet(id)
      .then(() => {
        dispatch({type: actions.REMOVED_TEACHERSETS, payload: id});
      })
      .catch(error => {
        dispatch({type: actions.REMOVED_TEACHERSETS_ERROR, payload: error});
      });
  }; 
}