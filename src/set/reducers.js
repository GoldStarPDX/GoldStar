/* SET REDUCERS */
import * as actions from './constants';

export function set(state = [], { type, payload }) {
  switch (type) {
    case actions.FETCHED_SET:
      return payload;
    case actions.ADDED_CARDSTOSET:
      return [...state, payload];
    case actions.REMOVED_CARDSFROMSET: {
      const index = state.findIndex(s => s._id === payload);
      return [...state.slice(0, index), ...state.slice(index+1)];
    }
    default:
      return state;
  }
}

export function setError(state = null, { type, payload }) {
  switch (type) {
    case actions.FETCHED_SET_ERROR:
    case actions.ADDED_CARDSTOSET_ERROR:
    case actions.REMOVED_CARDSFROMSET_ERROR:
      return payload;
    case actions.FETCHING_SET:
    case actions.ADDING_CARDSTOSET:
    case actions.REMOVING_CARDSFROMSET:
      return null;
    default:
      return state;
  }
}

// TODO: teacher set, teacher set error, cry.