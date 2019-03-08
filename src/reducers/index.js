import { combineReducers } from 'redux';
import complaintsReducer from './complaintsReducer';

export default combineReducers({
  complaints: complaintsReducer
});