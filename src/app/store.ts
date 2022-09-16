import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './appReducer';

import { authReducer } from 'features/auth/authReduser';
import { cardsReducer } from 'features/cards/cardsReducer';
import { forgotReducer } from 'features/forgot/forgotReducer';
import { packsReducer } from 'features/packs/packsReducer';

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
