import { AppRootState } from 'common/types/AppTypes';

export const getIsLoggedIn = (state: AppRootState): boolean => state.auth.isLoggedIn;
export const getIsRegistration = (state: AppRootState): boolean =>
  state.auth.isRegistration;
export const getName = (state: AppRootState): string => state.auth.name;
export const getEmail = (state: AppRootState): string => state.auth.email;
export const getId = (state: AppRootState): string => state.auth._id;
export const getAvatar = (state: AppRootState): string => state.auth.avatar;
