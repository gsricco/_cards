import React, { FC, useState } from 'react';

import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import { setPacksParams } from '../../../features';
import { useAppDispatch } from '../../../hooks';

import styles from './TableHeader.module.scss';

type Props = {
  firstCell: string;
  secondCell: string;
  thirdCell: string;
  fourthCell: string;
  fifthCell?: string;
};

export const TableHeader: FC<Props> = ({
  firstCell,
  secondCell,
  thirdCell,
  fourthCell,
  fifthCell,
}) => {
  const dispatch = useAppDispatch();
  const [changeSortPack, setChangeSortPack] = useState(true);

  const getSortDatePack = (): void => {
    setChangeSortPack(!changeSortPack);
    const sortPacks = changeSortPack ? '1updated' : '0updated';

    dispatch(setPacksParams({ sortPacks }));
  };

  const getSortNamePack = (): void => {
    setChangeSortPack(!changeSortPack);
    const sortPacks = changeSortPack ? '1name' : '0name';

    dispatch(setPacksParams({ sortPacks }));
  };

  const getSortCardPack = (): void => {
    setChangeSortPack(!changeSortPack);
    const sortPacks = changeSortPack ? '1cardsCount' : '0cardsCount';

    dispatch(setPacksParams({ sortPacks }));
  };

  return (
    <TableHead className={styles.tableHead}>
      <TableRow>
        <TableCell>
          <TableSortLabel
            className={styles.tableFirstCell}
            active
            direction="desc"
            onClick={getSortNamePack}
          >
            {firstCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            className={styles.tableSecondCell}
            active
            direction="desc"
            onClick={getSortCardPack}
          >
            {secondCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            className={styles.tableSortLabel}
            active
            direction="desc"
            onClick={getSortDatePack}
          >
            {thirdCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>{fourthCell}</TableCell>
        <TableCell>{fifthCell}</TableCell>
      </TableRow>
    </TableHead>
  );
};
