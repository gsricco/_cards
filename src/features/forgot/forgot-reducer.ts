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
    case 'FORGOT/SET-NEW-NAME':
    case 'FORGOT/SET-NEW-PASSWORD':
    case 'FORGOT/RECOVER-NEW-PASSWORD':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setNewName = (data: UpdateUserDataType) =>
  ({ type: 'FORGOT/SET-NEW-NAME', payload: data } as const);
export const setNewPassword = (password: string) =>
  ({ type: 'FORGOT/SET-NEW-PASSWORD', payload: { password } } as const);
export const recoverNewPassword = (email: string) =>
  ({ type: 'FORGOT/RECOVER-NEW-PASSWORD', payload: { email } } as const);

export const updateUser =
  (data: UpdateUserDataType): AppThunk =>
  async dispatch => {
    const { name } = { ...data };

    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      await forgotAPI.updateUserName({ name });

      dispatch(setNewName({ name, avatar: '' }));
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

      dispatch(setNewPassword(res.data.info));
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
      const res = await forgotAPI.recoverPassword({
        email,
        from: 'hello <suveikosasha@gmail.com',
        message: 'test',
      });

      dispatch(recoverNewPassword(email));
      dispatch(setAppInfo(res.data.info));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };

type InitialStateType = typeof initialState;
