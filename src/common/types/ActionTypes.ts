import { setAppError, setAppInfo, setAppInitialized, setAppStatus } from 'app/appReducer';
import {
  setAvatar,
  setEmail,
  setId,
  setIsLoggedIn,
  setIsRegistration,
  setName,
} from 'features/auth/authReduser';
import { setCards, setCardsParams, updateCardGrade } from 'features/cards/cardsReducer';
import {
  recoverNewPassword,
  setNewName,
  setNewPassword,
} from 'features/forgot/forgotReducer';
import {
  setPacks,
  setPacksPage,
  setPacksPageCount,
  setPacksParams,
} from 'features/packs/packsReducer';

export type ForgotActionsType =
  | ReturnType<typeof setNewName>
  | ReturnType<typeof setNewPassword>
  | ReturnType<typeof recoverNewPassword>;
export type AuthActionsType =
  | ReturnType<typeof setIsLoggedIn>
  | ReturnType<typeof setIsRegistration>
  | ReturnType<typeof setName>
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setId>
  | ReturnType<typeof setAvatar>;
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
  | ReturnType<typeof setCardsParams>
  | ReturnType<typeof updateCardGrade>;
