export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type RegisterDataType = {
  email: string;
  password: string;
};
export type UpdateUserDataType = {
  name: string;
  avatar?: string;
};
export type UpdatePasswordDataType = {
  password: string;
  resetPasswordToken: string;
};
export type RecoverPasswordType = {
  email: string;
  from: string;
  message: string;
};
export type PacksParamsType = {
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string;
};
