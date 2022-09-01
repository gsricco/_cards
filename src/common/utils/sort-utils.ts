import { SortPacks, AppDispatch } from 'common';
import { setPacksParams } from 'features';

export const sortPacks = (
  dispatch: AppDispatch,
  changeSortPack: boolean,
  setChangeSortPack: (value: ((prevState: boolean) => boolean) | boolean) => void,
  sortParams: SortPacks,
): void => {
  setChangeSortPack(!changeSortPack);
  const sortPacks = changeSortPack ? `1${sortParams}` : `0${sortParams}`;

  dispatch(setPacksParams({ sortPacks }));
};
