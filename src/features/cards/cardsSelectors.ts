import { AppRootState, CardsParamsType, CardsType } from 'common';

export const getPackCards = (state: AppRootState): CardsType[] => state.cards.cards;
export const getCardsPage = (state: AppRootState): number => state.cards.page;
export const getCardsTotalCount = (state: AppRootState): number =>
  state.cards.cardsTotalCount;
export const getCardsQueryParams = (state: AppRootState): CardsParamsType =>
  state.cards.queryParams;
export const getCardUserId = (state: AppRootState): string => state.cards.packUserId;
export const getCardsPageCount = (state: AppRootState): number => state.cards.pageCount;
export const getCardsPackId = (state: AppRootState): string =>
  state.cards.queryParams.cardsPack_id;
