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
export type PacksType = {
  cardPacks: CardsPacksType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
} & TokenType;
export type CardsPacksType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: false;
  name: string;
  path: string;
  grade: number;
  shots: number;
  deckCover: string;
  cardsCount: number;
  type: string;
  rating: number;
  created: string;
  updated: string;
  more_id: string;
  __v: number;
};
type TokenType = {
  token?: string;
  tokenDeathTime?: number;
};
