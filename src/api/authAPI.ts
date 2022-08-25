import { instanceHeroku } from './instance';

import {
  LoginDataType,
  RegisterDataType,
  MeResponseType,
  RegisterType,
  InfoType,
} from 'common';

export const authAPI = {
  me: () => instanceHeroku.post<MeResponseType>('auth/me'),

  login: (data: LoginDataType) => instanceHeroku.post<MeResponseType>('auth/login', data),

  logout: () => instanceHeroku.delete<InfoType>('auth/me'),

  register: (data: RegisterDataType) =>
    instanceHeroku.post<RegisterType>('auth/register', data),
};
