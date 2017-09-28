import * as actions from './constants';
import api from '../services/courseApi';

export function getCourse(id) {
  
  return dispatch => {
    dispatch({ type: actions.FETCHING_COURSE });

    api.getCourse(id)
      .then(course => {
        dispatch({ type: actions.FETCHED_COURSE, payload: course });
      },
      //etc...
      error => {
        dispatch({ type: actions.FETCHED_COURSE_ERROR, payload: error });
      });
  };
}

export function addStudent(courseId, data) {
  
  return dispatch => {
    dispatch({ type: actions.ADDING_STUDENT });

    api.addStudent(courseId, data) 
      .then(course => {
        dispatch({ type: actions.ADDED_STUDENT, payload: course });
      })
      .catch(error => {
        dispatch({ type: actions.ADDED_STUDENT_ERROR, payload: error });
      });
  };
}

export function removeStudent(courseId, studentId) {
  
  return dispatch => {
    dispatch({ type: actions.REMOVING_STUDENT });

    api.removeStudent(courseId, studentId) 
      .then(() => {
        dispatch({ type: actions.REMOVED_STUDENT, payload: studentId });
      })
      .catch(error => {
        dispatch({ type: actions.REMOVED_STUDENT_ERROR, payload: error });
      });
  };
}

export function addSet(courseId, data) {
  
  return dispatch => {
    dispatch({ type: actions.ADDING_SET });

    api.addSet(courseId, data) 
      .then(sets => {
        dispatch({ type: actions.ADDED_SET, payload: sets });
      })
      .catch(error => {
        dispatch({ type: actions.ADDED_SET_ERROR, payload: error });
      });
  };
}

export function removeSet(courseId, setId) {
  
  return dispatch => {
    dispatch({ type: actions.REMOVING_SET });

    api.removeSet(courseId, setId) 
      .then(() => {
        dispatch({ type: actions.REMOVED_SET, payload: setId });
      },
      error => {
        dispatch({ type: actions.REMOVED_SET_ERROR, payload: error });
      });
  };
}