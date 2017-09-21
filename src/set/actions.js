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

export function addCard() {
  return dispatch => {
    dispatch({type: actions.ADDING_CARDTOSET});
    api.addCard()
      .then(set => {
        dispatch({type: actions.ADDED_CARDTOSET, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.ADDED_CARDTOSET_ERROR, payload: error});
      });
  }; 
}

export function deleteCard(id) {
  return dispatch => {
    dispatch({type: actions.REMOVING_CARDSFROMSET});
    api.deleteCard(id)
      .then(() => {
        dispatch({type: actions.REMOVED_CARDSFROMSET, payload: id});
      })
      .catch(error => {
        dispatch({type: actions.REMOVED_CARDSFROMSET_ERROR, payload: error});
      });
  }; 
}