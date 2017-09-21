import * as actions from './constants';

export function teacherSets(state = [], { type, payload }) {
  switch (type) {
    case actions.FETCHED_TEACHERSETS:
      return payload;
    case actions.ADDED_TEACHERSET:
      return [...state, payload];
    case actions.REMOVED_TEACHERSET: {
      const index = state.findIndex(s => s._id === payload);
      return [...state.slice(0, index), ...state.slice(index+1)];
    }
    default:
      return state;
  }
}

export function teacherSetsError(state = null, { type, payload }) {
  switch (type) {
    case actions.FETCHED_TEACHERSETS_ERROR:
    case actions.ADDED_TEACHERSET_ERROR:
      return payload;
    case actions.FETCHING_TEACHERSETS:
    case actions.ADDING_TEACHERSET:
      return null;
    default:
      return state;
  }
}

// TODO: teacher set, teacher set error, cry.