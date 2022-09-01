import { setPacksPageCount } from '../../features/packs/packs-reducer';

import { setAppError, setAppInfo, setAppInitialized, setAppStatus } from 'app';
import {
  recoverNewPassword,
  setCardPage,
  setCards,
  setCardsParams,
  setEmail,
  setId,
  setIsLoggedIn,
  setIsRegistration,
  setName,
  setNewName,
  setNewPassword,
  setPacks,
  setPacksPage,
  setPacksParams,
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
  | ReturnType<typeof setPacksPage>
  | ReturnType<typeof setPacksPageCount>
  | ReturnType<typeof setPacksParams>;
export type CardsActionTypes =
  | ReturnType<typeof setCards>
  | ReturnType<typeof setCardPage>
  | ReturnType<typeof setCardsParams>;
