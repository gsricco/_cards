import { instance } from './instance';

import {
  InfoResponseType,
  LoginDataType,
  MeResponseType,
  RegisterDataType,
  RegisterResponseType,
} from 'common';

export const authAPI = {
  me: () => instance.post<MeResponseType>('auth/me'),

  login: (data: LoginDataType) => instance.post<MeResponseType>('auth/login', data),

  logout: () => instance.delete<InfoResponseType>('auth/me'),

  register: (data: RegisterDataType) =>
    instance.post<RegisterResponseType>('auth/register', data),
};
