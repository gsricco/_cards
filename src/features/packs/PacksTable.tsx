import { FC, useEffect } from 'react';

import { TableContainer, Table } from '@mui/material';

import { getPacks } from './packs-reducer';
import styles from './PacksTable.module.scss';

import { Paginator } from 'common';
import { PacksTableHeader, PacksTableBody } from 'features';
import { useAppDispatch } from 'hooks';

export const PacksTable: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPacks({ page: 1, pageCount: 8 }));
  }, [dispatch]);

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
