import { AppRootState, CardsPacksType } from 'common';

export const getPacks = (state: AppRootState): CardsPacksType[] => state.packs.cardPacks;
export const getPage = (state: AppRootState): number => state.packs.page;
export const getCardPacksTotalCount = (state: AppRootState): number =>
  state.packs.cardPacksTotalCount;
