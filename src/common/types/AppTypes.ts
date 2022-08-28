import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
  AppReducerActionType,
  AuthActionsType,
  ForgotActionsType,
  PacksActionTypes,
} from './ActionTypes';

import { store } from 'app';

type ActionsTypes =
  | AuthActionsType
  | AppReducerActionType
  | ForgotActionsType
  | PacksActionTypes;
export type AppRootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  ActionsTypes
>;
export type AppDispatch = ThunkDispatch<AppRootState, unknown, ActionsTypes>;
