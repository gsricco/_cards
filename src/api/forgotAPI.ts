import { instance, instanceHeroku } from './instance';

import { InfoType, UpdatePasswordDataType, UpdateUserType } from 'common';

export const forgotAPI = {
  updateUserName: (name: string, avatar?: string) =>
    instance.put<UpdateUserType>('auth/me', { name, avatar }),

  updatePassword: (data: UpdatePasswordDataType) =>
    instance.post<InfoType>('auth/set-new-password', data),

  recoverPassword: (email: string, from: string, message: string) =>
    instanceHeroku.post<InfoType>('auth/forgot', { email, from, message }),
};
