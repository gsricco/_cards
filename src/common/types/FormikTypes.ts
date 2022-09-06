export type RegistrationType = {
  email: string;
  password: string;
  confirmPassword: string;
};
export type ForgotPasswordType = {
  email: string;
};
export type LoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type NewPasswordType = {
  password: string;
};
