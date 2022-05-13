import LoggedReducer from './isLogged';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const loginPersistConfig = {
  key: 'logged',
  storage
};
const rootReducer = combineReducers({
  isLogged: LoggedReducer
});

export default persistReducer(loginPersistConfig, rootReducer);
