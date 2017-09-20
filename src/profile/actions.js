import * as actions from './constants';
import api from '../services/profileApi';

export function getProfile(status) {
  return dispatch => {
    dispatch({ type: actions.FETCHING_PROFILE });

    api.get(status)
      .then(profile => {
        dispatch({ type: actions.FETCHED_PROFILE, payload: profile });
      })
      .catch(error => {
        dispatch({ type: actions.FETCHED_PROFILE_ERROR, payload: error });
      });
  };
}

export function updateImage(status, data) {
  return dispatch => {
    dispatch({ type: actions.UPDATING_IMAGE });

    api.update(status, data)
      .then(updated => {
        dispatch({ type: actions.UPDATED_IMAGE, payload: updated });
      })
      .catch(error => {
        dispatch({ type: actions.UPDATED_IMAGE_ERROR, payload: error });
      });
  };
}