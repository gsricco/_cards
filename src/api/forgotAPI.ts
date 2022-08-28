import { instance, instanceHeroku } from './instance';

import {
  InfoResponseType,
  UpdatePasswordDataType,
  UpdateUserDataType,
  UpdateUserResponseType,
  RecoverPasswordType,
} from 'common';

export const forgotAPI = {
  updateUserName: (data: UpdateUserDataType) =>
    instance.put<UpdateUserResponseType>('auth/me', data),

  updatePassword: (data: UpdatePasswordDataType) =>
    instance.post<InfoResponseType>('auth/set-new-password', data),

  recoverPassword: (data: RecoverPasswordType) =>
    instanceHeroku.post<InfoResponseType>('auth/forgot', data),
};
