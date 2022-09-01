import { FC } from 'react';

import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import styles from './TableHeader.module.scss';

type Props = {
  firstCell: string;
  secondCell: string;
  thirdCell: string;
  fourthCell: string;
  fifthCell?: string;
  sortFirstCell?: () => void;
  sortSecondCell?: () => void;
  sortThirdCell?: () => void;
  sortFourthCell?: () => void;
};

export const TableHeader: FC<Props> = ({
  firstCell,
  secondCell,
  thirdCell,
  fourthCell,
  fifthCell,
  sortFirstCell,
  sortSecondCell,
  sortThirdCell,
  sortFourthCell,
}) => {
  return (
    <TableHead className={styles.tableHead}>
      <TableRow>
        <TableCell>
          <TableSortLabel
            className={styles.tableFirstCell}
            active
            direction="desc"
            onClick={sortFirstCell}
          >
            {firstCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            className={styles.tableSecondCell}
            active
            direction="desc"
            onClick={sortSecondCell}
          >
            {secondCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            className={styles.tableSortLabel}
            active
            direction="desc"
            onClick={sortThirdCell}
          >
            {thirdCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>
          <TableSortLabel
            className={styles.tableSortLabel}
            active
            direction="desc"
            onClick={sortFourthCell}
          >
            {fourthCell}
          </TableSortLabel>
        </TableCell>
        <TableCell>{fifthCell}</TableCell>
      </TableRow>
    </TableHead>
  );
};
