import { AppRootState, CardsPacksType } from 'common';

export const getPacks = (state: AppRootState): CardsPacksType[] => state.packs.cardPacks;
