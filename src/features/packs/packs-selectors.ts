import { AppRootState, CardsPacksType, PacksParamsType } from 'common';

export const getCardPacks = (state: AppRootState): CardsPacksType[] =>
  state.packs.cardPacks;
export const getPage = (state: AppRootState): number => state.packs.page;
export const getPackName = (state: AppRootState): string | undefined =>
  state.packs.queryParams.packName;
export const getCardPacksTotalCount = (state: AppRootState): number =>
  state.packs.cardPacksTotalCount;
export const getMinPacksCount = (state: AppRootState): number =>
  state.packs.minCardsCount;
export const getMaxPacksCount = (state: AppRootState): number =>
  state.packs.maxCardsCount;
export const getPackQueryParams = (state: AppRootState): PacksParamsType =>
  state.packs.queryParams;
export const getPacksPageCount = (state: AppRootState): number => state.packs.pageCount;
