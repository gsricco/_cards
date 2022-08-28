import { deletePacksAC } from '../../features/packs/packs-reducer';

import { setAppError, setAppInfo, setAppInitialized, setAppStatus } from 'app';
import {
  setEmail,
  setIsLoggedIn,
  setIsRegistration,
  setName,
  recoverUserPassword,
  updateUserName,
  updateUserPassword,
  getPacksAC,
} from 'features';

export type ForgotActionsType =
  | ReturnType<typeof updateUserName>
  | ReturnType<typeof updateUserPassword>
  | ReturnType<typeof recoverUserPassword>;
export type AuthActionsType =
  | ReturnType<typeof setIsLoggedIn>
  | ReturnType<typeof setIsRegistration>
  | ReturnType<typeof setName>
  | ReturnType<typeof setEmail>;
export type AppReducerActionType =
  | ReturnType<typeof setAppStatus>
  | ReturnType<typeof setAppError>
  | ReturnType<typeof setAppInitialized>
  | ReturnType<typeof setAppInfo>;
export type PacksActionTypes =
  | ReturnType<typeof getPacksAC>
  | ReturnType<typeof deletePacksAC>;
