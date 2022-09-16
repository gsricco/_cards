import { authAPI } from 'api/authAPI';
import { RequestStatus } from 'common/enums/requestStatus';
import { AppReducerActionType } from 'common/types/ActionTypes';
import { AppThunk } from 'common/types/AppTypes';
import { Nullable } from 'common/types/Nullable';
import { setNameEmail } from 'common/utils/setNameEmail';
import { setAvatar, setId, setIsLoggedIn } from 'features/auth/authReduser';

const initialState = {
  status: RequestStatus.IDLE,
  error: null as Nullable<string>,
  info: null as Nullable<string>,
  isInitialized: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: AppReducerActionType,
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
    case 'APP/SET-ERROR':
    case 'APP/SET-APP-INITIALIZED':
    case 'APP/SET-APP-INFO':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setAppStatus = (status: RequestStatus) =>
  ({ type: 'APP/SET-STATUS', payload: { status } } as const);
export const setAppError = (error: Nullable<string>) =>
  ({ type: 'APP/SET-ERROR', payload: { error } } as const);
export const setAppInitialized = (isInitialized: boolean) =>
  ({ type: 'APP/SET-APP-INITIALIZED', payload: { isInitialized } } as const);
export const setAppInfo = (info: Nullable<string>) =>
  ({ type: 'APP/SET-APP-INFO', payload: { info } } as const);

export const initialized = (): AppThunk => async dispatch => {
  try {
    const res = await authAPI.me();

    setNameEmail(res.data, dispatch);

    dispatch(setId(res.data._id));
    dispatch(setAvatar(res.data.avatar));
    dispatch(setIsLoggedIn(true));
    dispatch(setAppInitialized(true));
  } finally {
    dispatch(setAppInitialized(true));
  }
};

export type InitialStateType = typeof initialState;
