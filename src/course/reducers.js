import * as actions from './constants';

export function course(state = {}, { type, payload }) {
  switch(type) {
    case actions.FETCHED_COURSE:
      return payload;
    case actions.ADDED_STUDENT:
    case actions.ADDED_SET:
      return {
        ...state, 
        flashcardSets: payload
      };
    case actions.REMOVED_STUDENT:
    case actions.REMOVED_SET:
    {
      const index = state.findIndex(a => a._id === payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}

export function courseError(state = null, action) {
  switch(action.type) {
    case actions.FETCHED_COURSE_ERROR:
    case actions.ADDED_STUDENT_ERROR:
    case actions.ADDED_SET_ERROR:
      return action.payload;
    case actions.FETCHING_COURSE:
    case actions.ADDING_STUDENT:
    case actions.ADDING_SET:
      return null;
    default:
      return state;
  }
}

export function courseLoading(state = false, action) {
  switch(action.type) {
    case actions.FETCHING_COURSE:
    case actions.ADDING_STUDENT:
    case actions.ADDING_SET:
      return true;
    case actions.FETCHED_COURSE:
    case actions.ADDED_STUDENT:
    case actions.ADDED_SET:
    case actions.FETCHED_COURSE_ERROR:
    case actions.ADDED_STUDENT_ERROR:
    case actions.ADDED_SET_ERROR:
      return false;
    default:
      return state;
  }
}