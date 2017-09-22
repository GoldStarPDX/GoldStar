import * as actions from './constants';
import api from '../services/coursesApi';

export function getCourses() {

  return dispatch => {
    dispatch({ type: actions.FETCHING_COURSES });

    api.get()
      .then(courses => {
        dispatch({ type: actions.FETCHED_COURSES, payload: courses });
      })
      .catch(error => {
        dispatch({ type: actions.FETCHED_COURSES_ERROR, payload: error });
      });
  };
}
