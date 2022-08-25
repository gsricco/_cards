export type UserType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  avatar: string | null;
} & TokenType;
export type RegisterType = {
  addedUser: UserType;
  error?: string;
};
export type MeResponseType = UserType & {
  error?: string;
};
export type UpdateUserType = {
  user: UserType;
  error?: string;
} & TokenType;
export type InfoType = {
  info: string;
  error: string;
};
type TokenType = {
  token: string;
  tokenDeathTime: number;
};
