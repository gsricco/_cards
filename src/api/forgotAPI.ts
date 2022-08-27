import { instance, instanceHeroku } from './instance';

import {
  InfoType,
  UpdatePasswordDataType,
  UpdateUserDataType,
  UpdateUserType,
  RecoverPasswordType,
} from 'common';

export const forgotAPI = {
  updateUserName: (data: UpdateUserDataType) =>
    instance.put<UpdateUserType>('auth/me', data),

  updatePassword: (data: UpdatePasswordDataType) =>
    instance.post<InfoType>('auth/set-new-password', data),

  recoverPassword: (data: RecoverPasswordType) =>
    instanceHeroku.post<InfoType>('auth/forgot', data),
};
