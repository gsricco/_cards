import { SortPacks } from 'common/enums/sortPacks';
import { AppDispatch } from 'common/types/AppTypes';
import { CardsParamsType, PacksParamsType } from 'common/types/DataTypes';
import { setPacksParams } from 'features/packs/packsReducer';

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
