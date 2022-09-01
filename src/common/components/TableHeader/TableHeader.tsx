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

  const getSortPack = (): void => {
    setChangeSortPack(!changeSortPack);
    const sortPacks = changeSortPack ? '1updated' : '0updated';

    dispatch(setPacksParams({ sortPacks }));
  };

  return (
    <TableHead className={styles.tableHead}>
      <TableRow>
        <TableCell className={styles.tableFirstCell}>{firstCell}</TableCell>
        <TableCell className={styles.tableSecondCell}>{secondCell}</TableCell>
        <TableCell>
          <TableSortLabel
            className={styles.tableSortLabel}
            active
            direction="desc"
            onClick={getSortPack}
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
