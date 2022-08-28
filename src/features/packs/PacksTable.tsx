import { FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';

import { getPacks } from './packs-reducer';
import styles from './PacksTable.module.scss';

import { Paginator } from 'common';
import { PacksTableBody, PacksTableHeader } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const PacksTable: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector<number>(state => state.packs.page);
  const cardPacksTotalCount = useAppSelector<number>(
    state => state.packs.cardPacksTotalCount,
  );
  const packsPerPage = 8;

  useEffect(() => {
    dispatch(getPacks({ page, pageCount: 8 }));
  }, [page]);

  return (
    <>
      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <PacksTableHeader />
          <PacksTableBody />
        </Table>
      </TableContainer>
      <Paginator pageCount={packsPerPage} totalElements={cardPacksTotalCount} />
    </>
  );
};
