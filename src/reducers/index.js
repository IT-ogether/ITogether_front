import BookMarksReducer from './bookMarks';
import { combineReducers } from 'redux';
import preferenceReducer from './preferenceReducer';
import userNameReducer from './userNameReducer';

const rootReducer = combineReducers({
  bookMarks: BookMarksReducer,
  preference: preferenceReducer,
  nickName: userNameReducer
});

export default rootReducer;
