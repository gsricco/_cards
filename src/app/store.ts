import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './app-reducer';

import { loadState, saveState } from 'common';
import { authReducer, forgotReducer, cardsReducer, packsReducer } from 'features';

const reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  forgot: forgotReducer,
  packs: packsReducer,
  cards: cardsReducer,
});

const persistedState = loadState();

export const store = createStore(reducers, persistedState, applyMiddleware(thunk));
store.subscribe(() => {
  saveState(store.getState());
});

// @ts-ignore
window.store = store;
