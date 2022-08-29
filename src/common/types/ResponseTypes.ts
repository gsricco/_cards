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
export type RegisterResponseType = {
  addedUser: UserType;
  error?: string;
};
export type MeResponseType = UserType & {
  error?: string;
};
export type UpdateUserResponseType = {
  user: UserType;
  error?: string;
} & TokenType;
export type InfoResponseType = {
  info: string;
  error: string;
};
export type PacksResponseType = {
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
export type DeletePackResponseType = {
  deletedCardsPack: CardsPacksType;
} & TokenType;
export type AddPackResponseType = {
  newCardsPack: CardsPacksType;
} & TokenType;
export type UpdatePackResponseType = {
  updatedCardsPack: CardsPacksType;
} & TokenType;
export type CardsType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  user_id: string;
  created: string;
  updated: string;
  _id: string;
};
export type CardsResponseType = {
  cards: CardsType[];
  packUserId?: string;
  packName?: string;
  packPrivate?: false;
  packCreated?: string;
  packUpdated?: string;
  page: number;
  pageCount: number;
  cardsTotalCount: number;
  minGrade: number;
  maxGrade: number;
} & TokenType;
type TokenType = {
  token?: string;
  tokenDeathTime?: number;
};
