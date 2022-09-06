import { FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import styles from './Packs.module.scss';
import { PacksFooter } from './PacksFooter';
import { PacksSettings } from './PacksSettings';
import { PacksTableHeader } from './PacksTableHeader';

import { Path } from 'common';
import { MIN_SELECT_VALUE } from 'common/constants/constants';
import {
  getIsLoggedIn,
  getPackQueryParams,
  getPacksPageCount,
  PacksTableBody,
  setPacksParams,
} from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Packs: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const queryParams = useAppSelector(getPackQueryParams);
  const pageCount = useAppSelector(getPacksPageCount);

  useEffect(() => {
    dispatch(
      setPacksParams({
        ...queryParams,
        page: queryParams.page,
        pageCount: pageCount || MIN_SELECT_VALUE,
      }),
    );
  }, []);

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <div className={styles.container}>
      <PacksSettings />

      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <PacksTableHeader />
          <PacksTableBody />
        </Table>
      </TableContainer>

      <PacksFooter />
    </div>
  );
};
