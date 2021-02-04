import { combineReducers } from 'redux';
import airlineReducer from './airlineSlice';

const rootReducer = combineReducers({
  airlineData: airlineReducer,
});

export default rootReducer;
