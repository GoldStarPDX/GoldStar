import * as actions from './constants';
import * as profileActions from '../profile/constants';
import { combineReducers } from 'redux';

export default (state = {}, action) => combineReducers({ user, token, error })(state, action);

export function user(state = null, { type, payload }) {
  switch (type) {
    case actions.FETCHED_USER:
    case profileActions.UPDATED_IMAGE:
      return payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

export function token(state = null, { type, payload }) {
  switch (type) {
    case actions.GOT_TOKEN:
      return payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

export function error(state = null, { type, payload }) {
  switch (type) {
    case actions.AUTH_FAILED:
    case profileActions.UPDATED_IMAGE_ERROR:
      return payload;
    case actions.LOGOUT:
    case actions.GOT_TOKEN:
    case actions.FETCHED_USER:
    case profileActions.UPDATED_IMAGE:
      return null;
    default:
      return state;
  }
}