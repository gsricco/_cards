import React, { FC } from 'react';

import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import styles from 'features/packs/Packs/Packs.module.scss';

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
        <TableCell sx={{ width: '186px' }}>{firstCell}</TableCell>
        <TableCell sx={{ width: '222px' }}>{secondCell}</TableCell>
        <TableCell>
          <TableSortLabel sx={{ width: '153px' }} active direction="desc">
            {thirdCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>{fourthCell}</TableCell>
        <TableCell>{fifthCell}</TableCell>
      </TableRow>
    </TableHead>
  );
};
