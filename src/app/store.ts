import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { cardsReducer } from '../features/cards/cards-reducer';

import { appReducer } from './app-reducer';

import { authReducer, forgotReducer } from 'features';
import { packsReducer } from 'features/packs/packs-reducer';

const reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  forgot: forgotReducer,
  packs: packsReducer,
  cardsPack: cardsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
