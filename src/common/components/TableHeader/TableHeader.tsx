import React, { FC } from 'react';

import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

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
  return (
    <TableHead className={styles.tableHead}>
      <TableRow>
        <TableCell className={styles.tableFirstCell}>{firstCell}</TableCell>
        <TableCell className={styles.tableSecondCell}>{secondCell}</TableCell>
        <TableCell>
          <TableSortLabel className={styles.tableSortLabel} active direction="desc">
            {thirdCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>{fourthCell}</TableCell>
        <TableCell>{fifthCell}</TableCell>
      </TableRow>
    </TableHead>
  );
};
