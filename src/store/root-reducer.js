import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import results from '../search/reducer';

export default combineReducers({
  auth,
  results
});

