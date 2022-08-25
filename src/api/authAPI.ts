import { instance } from './instance';

import {
  LoginDataType,
  RegisterDataType,
  MeResponseType,
  RegisterType,
  InfoType,
} from 'common';

export const authAPI = {
  me: () => instance.post<MeResponseType>('auth/me'),

  login: (data: LoginDataType) => instance.post<MeResponseType>('auth/login', data),

  logout: () => instance.delete<InfoType>('auth/me'),

  register: (data: RegisterDataType) =>
    instance.post<RegisterType>('auth/register', data),
};
