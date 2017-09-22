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

export function addCourse(course) {

  return dispatch => {
    dispatch({ type: actions.ADDING_COURSE });

    api.add(course)
      .then(course => {
        dispatch({ type: actions.ADDED_COURSE, payload: course });
      })
      .catch(error => {
        dispatch({ type: actions.ADDED_COURSE_ERROR, payload: error });
      });
  };
}

export function removeCourse(courseId) {

  return dispatch => {
    dispatch({ type: actions.REMOVING_COURSE });

    api.remove(courseId)
      .then(() => {
        dispatch({ type: actions.REMOVED_COURSE, payload: courseId });
      })
      .catch(error => {
        dispatch({ type: actions.REMOVED_COURSE_ERROR, payload: error });
      });
  };
}