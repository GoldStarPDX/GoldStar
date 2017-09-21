import * as actions from './constants';

export function courses(state = [], action) {
  switch(action.type) {
    case actions.FETCHED_COURSES:
      return action.payload;
    case actions.ADDED_COURSE:
      return [...state, action.payload];
    case actions.REMOVED_COURSE: {
      const index = state.findIndex(a => a._id === action.payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}

export function coursesError(state = null, action) {
  switch(action.type) {
    case actions.FETCHED_COURSES_ERROR:
    case actions.ADDED_COURSE_ERROR:
      return action.payload;
    case actions.FETCHING_COURSES:
    case actions.ADDING_COURSE:
      return null;
    default:
      return state;
  }
}

export function coursesLoading(state = false, action) {
  switch(action.type) {
    case actions.FETCHING_COURSES:
    case actions.ADDING_COURSE:
      return true;
    case actions.FETCHED_COURSES:
    case actions.ADDED_COURSE:
    case actions.FETCHED_COURSES_ERROR:
    case actions.ADDED_COURSE_ERROR:
      return false;
    default:
      return state;
  }
}