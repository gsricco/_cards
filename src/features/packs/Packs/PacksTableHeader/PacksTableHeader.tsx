import { FC, useState } from 'react';

import { TableHeader } from 'common/components/TableHeader/TableHeader';
import { SortPacks } from 'common/enums/sortPacks';
import { sortPacks } from 'common/utils/sortPacks';
import { getPackQueryParams } from 'features/packs/packsSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

export const PacksTableHeader: FC = () => {
  const dispatch = useAppDispatch();

  const queryParams = useAppSelector(getPackQueryParams);

  const [changeSortPack, setChangeSortPack] = useState(true);

  const getSortDatePack = (): void => {
    sortPacks(
      dispatch,
      changeSortPack,
      setChangeSortPack,
      SortPacks.UPDATED,
      queryParams,
    );
  };
  const getSortCardPack = (): void => {
    sortPacks(
      dispatch,
      changeSortPack,
      setChangeSortPack,
      SortPacks.CARDS_COUNT,
      queryParams,
    );
  };
  const getSortNamePack = (): void => {
    sortPacks(dispatch, changeSortPack, setChangeSortPack, SortPacks.NAME, queryParams);
  };
  const getSortUserNamePack = (): void => {
    sortPacks(
      dispatch,
      changeSortPack,
      setChangeSortPack,
      SortPacks.USER_NAME,
      queryParams,
    );
  };

  return (
    <TableHeader
      firstCell="Name"
      secondCell="Cards"
      thirdCell="Last Updated"
      fourthCell="Created by"
      fifthCell="Actions"
      sortFirstCell={getSortDatePack}
      sortSecondCell={getSortCardPack}
      sortThirdCell={getSortNamePack}
      sortFourthCell={getSortUserNamePack}
    />
  );
};
