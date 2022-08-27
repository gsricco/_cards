import { FC } from 'react';

import { TableContainer, Table } from '@mui/material';

import styles from './PacksTable.module.scss';

import { Paginator } from 'common';
import { PacksTableHeader, PacksTableBody } from 'features';

export const PacksTable: FC = () => {
  return (
    <>
      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <PacksTableHeader />
          <PacksTableBody />
        </Table>
      </TableContainer>
      <Paginator />
    </>
  );
};
