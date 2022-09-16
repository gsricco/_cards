import { instance } from './instance/instance';

import {
  RecoverPasswordType,
  UpdatePasswordDataType,
  UpdateUserDataType,
} from 'common/types/DataTypes';
import { InfoResponseType, UpdateUserResponseType } from 'common/types/ResponseTypes';

export const forgotAPI = {
  updateUserName: (data: UpdateUserDataType) =>
    instance.put<UpdateUserResponseType>('auth/me', data),

  updatePassword: (data: UpdatePasswordDataType) =>
    instance.post<InfoResponseType>('auth/set-new-password', data),

  recoverPassword: (data: RecoverPasswordType) =>
    instance.post<InfoResponseType>('auth/forgot', data),
};
