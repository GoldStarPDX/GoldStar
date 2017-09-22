/* SET ACTIONS */
import * as actions from './constants';
import api from '../services/setApi';

export function getSet(id) {
  return dispatch => {
    dispatch({type: actions.FETCHING_SET});
    api.getSet(id)
      .then(set => {
        set.cards.name = set.name;
        dispatch({type: actions.FETCHED_SET, payload: set.cards});
      })
      .catch(error => {
        dispatch({type: actions.FETCHED_SET_ERROR, payload: error});
      });
  };
}

export function addCards(setId, data) {
  return dispatch => {
    dispatch({type: actions.ADDING_CARDSTOSET});
    api.addCards(setId,data)
      .then(set => {
        dispatch({type: actions.ADDED_CARDSTOSET, payload: set});
      })
      .catch(error => {
        dispatch({type: actions.ADDED_CARDSTOSET_ERROR, payload: error});
      });
  }; 
}

export function deleteCards(setId, cardId) {
  return dispatch => {
    dispatch({type: actions.REMOVING_CARDSFROMSET});
    api.deleteCards(setId, cardId)
      .then(() => {
        dispatch({type: actions.REMOVED_CARDSFROMSET, payload: cardId});
      })
      .catch(error => {
        dispatch({type: actions.REMOVED_CARDSFROMSET_ERROR, payload: error});
      });
  }; 
}