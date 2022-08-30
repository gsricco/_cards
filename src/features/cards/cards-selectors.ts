import { AppRootState, CardsType } from 'common';

export const getCards = (state: AppRootState): CardsType[] => state.cardsPack.cards;
export const getCardsPage = (state: AppRootState): number => state.cardsPack.page;
export const getCardsTotalCount = (state: AppRootState): number =>
  state.cardsPack.cardsTotalCount;
