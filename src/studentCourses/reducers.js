import * as actions from './constants';

export function studentCourses(state = [], { type, payload }) {
  switch(type) {
    case actions.FETCHED_COURSES:
      return payload;
    default:
      return state;
  }
}

export function studentCoursesError(state = null, action) {
  switch(action.type) {
    case actions.FETCHED_COURSES_ERROR:
      return action.payload;
    case actions.FETCHING_COURSES:
      return null;
    default:
      return state;
  }
}

export function studentCoursesLoading(state = false, action) {
  switch(action.type) {
    case actions.FETCHING_COURSES:
      return true;
    case actions.FETCHED_COURSES:
    case actions.FETCHED_COURSES_ERROR:
      return false;
    default:
      return state;
  }
}