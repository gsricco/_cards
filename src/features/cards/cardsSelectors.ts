import { AppRootState } from 'common/types/AppTypes';
import { CardsParamsType } from 'common/types/DataTypes';
import { CardsType } from 'common/types/ResponseTypes';

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
