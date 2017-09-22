import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import { results, returnedSet }  from '../search/reducers';
import { set } from '../set/reducers';
import { sets } from '../sets/reducers';
import { courses } from '../courses/reducers';

export default combineReducers({
  auth,
  results,
  returnedSet,
  set,
  sets,
  courses
});

