import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import search from '../search/reducers';

export default combineReducers({
  auth,
  search
});

