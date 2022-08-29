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
export type CardsPackType = {
  name?: string;
  deckCover?: string;
  private?: boolean;
  _id?: string;
};
export type AddCardsPackType = {
  cardsPack: CardsPackType;
};
export type CardsParamsType = {
  cardQuestion?: string;
  cardsPack_id: string;
  min?: number;
  max?: number;
  sortCards?: string;
  page?: number;
  pageCount?: number;
};
export type CreateCardType = {
  cardsPack_id: string;
  question: string;
  answer: string;
  grade?: number;
  shots?: number;
  answerImg?: string;
  questionImg?: string;
  questionVideo?: string;
  answerVideo?: string;
};
