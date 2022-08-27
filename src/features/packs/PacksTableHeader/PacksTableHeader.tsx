import { FC } from 'react';

import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import styles from '../PacksTable.module.scss';

export const PacksTableHeader: FC = () => {
  return (
    <TableHead className={styles.tableHead}>
      <TableRow>
        <TableCell sx={{ width: '186px' }}>Name</TableCell>
        <TableCell sx={{ width: '222px' }}>Cards</TableCell>
        <TableCell>
          <TableSortLabel sx={{ width: '153px' }} active direction="desc">
            Last Updated
          </TableSortLabel>
        </TableCell>
        <TableCell>Created by</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};
