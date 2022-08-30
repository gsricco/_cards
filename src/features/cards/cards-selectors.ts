import { AppRootState, CardsType } from 'common';

export const getPackCards = (state: AppRootState): CardsType[] => state.cards.cards;
export const getCardsPage = (state: AppRootState): number => state.cards.page;
export const getCardsTotalCount = (state: AppRootState): number =>
  state.cards.cardsTotalCount;
