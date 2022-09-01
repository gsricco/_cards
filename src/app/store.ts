import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './app-reducer';

import { authReducer, forgotReducer, cardsReducer, packsReducer } from 'features';

const reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  forgot: forgotReducer,
  packs: packsReducer,
  cards: cardsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;
