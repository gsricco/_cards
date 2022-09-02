import { instanceHeroku } from './instance';

import {
  InfoResponseType,
  LoginDataType,
  MeResponseType,
  RegisterDataType,
  RegisterResponseType,
} from 'common';

export const authAPI = {
  me: () => instanceHeroku.post<MeResponseType>('auth/me'),

  login: (data: LoginDataType) => instanceHeroku.post<MeResponseType>('auth/login', data),

  logout: () => instanceHeroku.delete<InfoResponseType>('auth/me'),

  register: (data: RegisterDataType) =>
    instanceHeroku.post<RegisterResponseType>('auth/register', data),
};
