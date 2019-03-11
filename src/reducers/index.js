import { combineReducers } from 'redux';
import complaintsReducer from './complaintsReducer';
import authReducer from './auth'
export default combineReducers({
  complaints: complaintsReducer,
  auth : authReducer
});