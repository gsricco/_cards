import { AppRootState, CardsType } from 'common';

export const getPackCards = (state: AppRootState): CardsType[] => state.cardsPack.cards;
export const getCardsPage = (state: AppRootState): number => state.cardsPack.page;
export const getCardsTotalCount = (state: AppRootState): number =>
  state.cardsPack.cardsTotalCount;
