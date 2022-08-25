import { instanceHeroku } from './instance';

import { InfoType, UpdatePasswordDataType, UpdateUserType } from 'common';

export const forgotAPI = {
  updateUserName: (name: string, avatar?: string) =>
    instanceHeroku.put<UpdateUserType>('auth/me', { name, avatar }),

  updatePassword: (data: UpdatePasswordDataType) =>
    instanceHeroku.post<InfoType>('auth/set-new-password', data),

  recoverPassword: (email: string, from: string, message: string) =>
    instanceHeroku.post<InfoType>('auth/forgot', { email, from, message }),
};
