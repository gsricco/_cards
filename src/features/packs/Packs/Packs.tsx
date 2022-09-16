import { FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { setPacksParams } from '../packsReducer';
import { getPacksPageCount, getPackQueryParams } from '../packsSelectors';

import styles from './Packs.module.scss';
import { PacksFooter } from './PacksFooter/PacksFooter';
import { PacksSettings } from './PacksSettings/PacksSettings';
import { PacksTableBody } from './PacksTableBody/PacksTableBody';
import { PacksTableHeader } from './PacksTableHeader/PacksTableHeader';

import { MIN_SELECT_VALUE } from 'common/constants/constants';
import { Path } from 'common/enums/path';
import { getIsLoggedIn } from 'features/auth/authSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

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
