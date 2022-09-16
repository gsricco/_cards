import { instance } from './instance/instance';

import { LoginDataType, RegisterDataType } from 'common/types/DataTypes';
import {
  InfoResponseType,
  MeResponseType,
  RegisterResponseType,
} from 'common/types/ResponseTypes';

export const authAPI = {
  me: () => instance.post<MeResponseType>('auth/me'),

  login: (data: LoginDataType) => instance.post<MeResponseType>('auth/login', data),

  logout: () => instance.delete<InfoResponseType>('auth/me'),

  register: (data: RegisterDataType) =>
    instance.post<RegisterResponseType>('auth/register', data),
};
