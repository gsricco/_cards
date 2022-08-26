import { AxiosError } from 'axios';

import { forgotAPI } from 'api';
import { setAppInfo, setAppStatus } from 'app';
import {
  AppThunk,
  RequestStatus,
  UpdatePasswordDataType,
  UpdateUserDataType,
  UserType,
  ForgotActionsType,
  handleServerNetworkError,
} from 'common';
import { setName } from 'features';

const initialState = {
  email: '',
  password: '',
  user: {} as UserType,
};

export const forgotReducer = (
  state: InitialStateType = initialState,
  action: ForgotActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'FORGOT/UPDATE-USER-NAME':
    case 'FORGOT/UPDATE-USER-PASSWORD':
    case 'FORGOT/RECOVER-USER-PASSWORD':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const updateUserName = (data: UpdateUserDataType) =>
  ({ type: 'FORGOT/UPDATE-USER-NAME', payload: data } as const);
export const updateUserPassword = (password: string) =>
  ({ type: 'FORGOT/UPDATE-USER-PASSWORD', payload: { password } } as const);
export const recoverUserPassword = (email: string) =>
  ({ type: 'FORGOT/RECOVER-USER-PASSWORD', payload: { email } } as const);

export const updateUser =
  (name: string): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      await forgotAPI.updateUserName(name);

      dispatch(updateUserName({ name, avatar: '' }));
      dispatch(setName(name));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const updatePassword =
  (data: UpdatePasswordDataType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      const res = await forgotAPI.updatePassword(data);

      dispatch(updateUserPassword(res.data.info));
      dispatch(setAppInfo(res.data.info));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const recoverPassword =
  (email: string): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      const res = await forgotAPI.recoverPassword(
        email,
        'hello <suveikosasha@gmail.com',
        'test',
      );

      dispatch(recoverUserPassword(email));
      dispatch(setAppInfo(res.data.info));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };

type InitialStateType = typeof initialState;
