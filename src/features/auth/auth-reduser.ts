import { AxiosError } from 'axios';

import { authAPI } from 'api';
import { setAppInfo, setAppStatus } from 'app';
import {
  AppThunk,
  LoginDataType,
  RegisterDataType,
  RequestStatus,
  AuthActionsType,
  handleServerNetworkError,
  setNameEmail,
} from 'common';

const initialState = {
  isLoggedIn: false,
  isRegistration: false,
  name: '',
  email: '',
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'LOGIN/SET-IS-LOGGED-IN':
    case 'LOGIN/SET-IS-REGISTRATION':
    case 'LOGIN/SET-USER-NAME':
    case 'LOGIN/SET-USER-EMAIL':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setIsLoggedIn = (isLoggedIn: boolean) =>
  ({ type: 'LOGIN/SET-IS-LOGGED-IN', payload: { isLoggedIn } } as const);
export const setIsRegistration = (isRegistration: boolean) =>
  ({ type: 'LOGIN/SET-IS-REGISTRATION', payload: { isRegistration } } as const);
export const setName = (name: string) =>
  ({ type: 'LOGIN/SET-USER-NAME', payload: { name } } as const);
export const setEmail = (email: string) =>
  ({ type: 'LOGIN/SET-USER-EMAIL', payload: { email } } as const);

export const login =
  (data: LoginDataType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      const res = await authAPI.login(data);

      setNameEmail(res.data, dispatch);
      dispatch(setIsLoggedIn(true));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const logout = (): AppThunk => async dispatch => {
  dispatch(setAppStatus(RequestStatus.LOADING));
  try {
    const res = await authAPI.logout();

    dispatch(setIsLoggedIn(false));
    dispatch(setAppInfo(res.data.info));
  } catch (error) {
    handleServerNetworkError(error as AxiosError | Error, dispatch);
  } finally {
    dispatch(setAppStatus(RequestStatus.SUCCEEDED));
  }
};
export const register =
  (data: RegisterDataType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      await authAPI.register(data);
      dispatch(setIsRegistration(true));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };

type InitialStateType = typeof initialState;
