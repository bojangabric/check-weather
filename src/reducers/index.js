import { combineReducers } from 'redux';
import cityInfoReducer from './cityInfoReducer';

export default combineReducers({
  cityInfo: cityInfoReducer
});
