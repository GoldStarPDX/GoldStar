/* SETS REDUCERS */
import * as actions from './constants';

export function sets(state = [], { type, payload }) {
  switch (type) {
    case actions.FETCHED_SETS:
      return payload;
    case actions.ADDED_SET:
      return [...state, payload];
    case actions.REMOVED_SET: {
      const index = state.findIndex(s => s._id === payload);
      return [...state.slice(0, index), ...state.slice(index+1)];
    }
    default:
      return state;
  }
}

export function setsError(state = null, { type, payload }) {
  switch (type) {
    case actions.FETCHED_SETS_ERROR:
    case actions.ADDED_SET_ERROR:
    case actions.REMOVED_SET_ERROR:
    case actions.UPDATED_SET_ERROR:
      return payload;
    case actions.FETCHING_SETS:
    case actions.ADDING_SET:
    case actions.REMOVING_SET:
    case actions.UPDATING_SET:
      return null;
    default:
      return state;
  }
}