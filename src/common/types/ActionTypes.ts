import { setAppError, setAppInfo, setAppInitialized, setAppStatus } from 'app';
import { postPacks } from '../../features/packs/packs-reducer';

import {
  setEmail,
  setIsLoggedIn,
  setIsRegistration,
  setName,
  recoverNewPassword,
  setNewName,
  setNewPassword,
  setPacks,
  setId,
  removePack,
  setPacksPage,
} from 'features';

export type ForgotActionsType =
  | ReturnType<typeof setNewName>
  | ReturnType<typeof setNewPassword>
  | ReturnType<typeof recoverNewPassword>;
export type AuthActionsType =
  | ReturnType<typeof setIsLoggedIn>
  | ReturnType<typeof setIsRegistration>
  | ReturnType<typeof setName>
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setId>;
export type AppReducerActionType =
  | ReturnType<typeof setAppStatus>
  | ReturnType<typeof setAppError>
  | ReturnType<typeof setAppInitialized>
  | ReturnType<typeof setAppInfo>;
export type PacksActionTypes =
  | ReturnType<typeof setPacks>
  | ReturnType<typeof removePack>
  | ReturnType<typeof setPacksPage>
    | ReturnType<typeof postPacks>;
