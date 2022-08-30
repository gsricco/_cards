import {
  postCard,
  removeCard,
  setCard,
  setCardPage,
  updateCard,
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
  postPacks,
  updatePack,
} from '../../features';

import { setAppError, setAppInfo, setAppInitialized, setAppStatus } from 'app';

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
  | ReturnType<typeof postPacks>
  | ReturnType<typeof updatePack>;
export type CardsActionTypes =
  | ReturnType<typeof setCard>
  | ReturnType<typeof postCard>
  | ReturnType<typeof setCardPage>
  | ReturnType<typeof updateCard>
  | ReturnType<typeof removeCard>;
