import { combineReducers } from 'redux';
import userReducers from './user.js';

const reducers = combineReducers({
  user: userReducers,
});

export default reducers;