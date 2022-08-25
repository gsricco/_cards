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
