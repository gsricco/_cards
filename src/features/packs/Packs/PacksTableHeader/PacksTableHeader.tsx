import { FC, useState } from 'react';

import { SortPacks, sortPacks, TableHeader } from 'common';
import { getPackQueryParams } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

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
