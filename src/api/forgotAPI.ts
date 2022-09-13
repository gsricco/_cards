import { instance } from './instance';

import {
  InfoResponseType,
  RecoverPasswordType,
  UpdatePasswordDataType,
  UpdateUserDataType,
  UpdateUserResponseType,
} from 'common';

export const forgotAPI = {
  updateUserName: (data: UpdateUserDataType) =>
    instance.put<UpdateUserResponseType>('auth/me', data),

  updatePassword: (data: UpdatePasswordDataType) =>
    instance.post<InfoResponseType>('auth/set-new-password', data),

  recoverPassword: (data: RecoverPasswordType) =>
    instance.post<InfoResponseType>('auth/forgot', data),
};
