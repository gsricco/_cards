import { AppRootState } from 'common/types/AppTypes';
import { PacksParamsType } from 'common/types/DataTypes';
import { CardsPacksType } from 'common/types/ResponseTypes';

export const getCardPacks = (state: AppRootState): CardsPacksType[] =>
  state.packs.cardPacks;
export const getPage = (state: AppRootState): number => state.packs.page;
export const getCardPacksTotalCount = (state: AppRootState): number =>
  state.packs.cardPacksTotalCount;
export const getMinPacksCount = (state: AppRootState): number =>
  state.packs.minCardsCount;
export const getMaxPacksCount = (state: AppRootState): number =>
  state.packs.maxCardsCount;
export const getPackQueryParams = (state: AppRootState): PacksParamsType =>
  state.packs.queryParams;
export const getPacksPageCount = (state: AppRootState): number => state.packs.pageCount;
