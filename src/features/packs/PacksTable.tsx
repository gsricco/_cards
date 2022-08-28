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

  useEffect(() => {
    dispatch(getPacks({ page: 1, pageCount: 8 }));
  }, [dispatch]);

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
      <Paginator />
    </>
  );
};
