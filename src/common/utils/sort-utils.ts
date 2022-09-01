import { SortPacks, AppDispatch, PacksParamsType, CardsParamsType } from 'common';
import { setPacksParams } from 'features';

export const sortPacks = (
  dispatch: AppDispatch,
  changeSortPack: boolean,
  setChangeSortPack: (value: ((prevState: boolean) => boolean) | boolean) => void,
  sortParams: SortPacks,
  queryParams: PacksParamsType | CardsParamsType,
): void => {
  setChangeSortPack(!changeSortPack);
  const sortPacks = changeSortPack ? `1${sortParams}` : `0${sortParams}`;

  dispatch(setPacksParams({ ...queryParams, sortPacks }));
};
