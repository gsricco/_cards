import { ChangeEvent, FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import styles from './Packs.module.scss';
import { PacksSettings } from './PacksSettings/PacksSettings';
import { PacksTableHeader } from './PacksTableHeader/PacksTableHeader';

import { MenuPageCount, Paginator, Path } from 'common';
import { MIN_SELECT_VALUE } from 'common/constants/constants';
import {
  getCardPacksTotalCount,
  getIsLoggedIn,
  getPackQueryParams,
  getPacksPageCount,
  getPage,
  PacksTableBody,
  setPacksParams,
} from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Packs: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const page = useAppSelector(getPage);
  const cardPacksTotalCount = useAppSelector(getCardPacksTotalCount);
  const queryParams = useAppSelector(getPackQueryParams);
  const pageCount = useAppSelector(getPacksPageCount);

  const onPageChange = (_: ChangeEvent<unknown>, page: number): void => {
    dispatch(setPacksParams({ ...queryParams, page }));
  };

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
      <div className={styles.pageManagement}>
        <Paginator
          pageCount={pageCount}
          totalElements={cardPacksTotalCount}
          page={page}
          setPage={onPageChange}
        />
        <MenuPageCount pageCount={pageCount} />
      </div>
    </div>
  );
};
