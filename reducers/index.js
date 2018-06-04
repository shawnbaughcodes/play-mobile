import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import NewsReducer from './NewsReducer';
import SportsReducer from './SportsReducer';
import UIReducer from './UIReducer';
import EventReducer from './EventReducer';

export default combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  news: NewsReducer,
  sports: SportsReducer,
  ui: UIReducer,
  event: EventReducer
});
