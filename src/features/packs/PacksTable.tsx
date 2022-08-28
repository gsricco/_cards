import { FC, useEffect } from 'react';

import { TableContainer, Table } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { getPacks } from './packs-reducer';
import styles from './PacksTable.module.scss';

import { Paginator, Path } from 'common';
import { PacksTableHeader, PacksTableBody, getIsLoggedIn } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const PacksTable: FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const page = useAppSelector<number>(state => state.packs.page);
  const cardPacksTotalCount = useAppSelector<number>(
    state => state.packs.cardPacksTotalCount,
  );
  const packsPerPage = 8;

  useEffect(() => {
    dispatch(getPacks({ page, pageCount: 8 }));
  }, [dispatch, page]);

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <>
      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <PacksTableHeader />
          <PacksTableBody />
        </Table>
      </TableContainer>
      <Paginator
        pageCount={packsPerPage}
        totalElements={cardPacksTotalCount}
        page={page}
      />
    </>
  );
};
