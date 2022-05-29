import BookMarksReducer from './bookMarks';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  bookMarks: BookMarksReducer
});

export default rootReducer;
