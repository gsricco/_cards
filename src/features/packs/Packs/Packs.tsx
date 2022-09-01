import { ChangeEvent, FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import styles from './Packs.module.scss';

import FilterRemoveBtn from 'assets/images/FilterRemoveBtn.svg';
import {
  FilteredButton,
  NumberOfCards,
  Paginator,
  Search,
  TableButton,
  TableHeader,
  Path,
} from 'common';
import {
  addPacks,
  getCardPacksTotalCount,
  getIsLoggedIn,
  getPackQueryParams,
  getPacks,
  getPacksPageCount,
  getPage,
  PacksTableBody,
  setPacksPage,
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

  const onPageChange = (_: ChangeEvent<unknown>, currentPage: number): void => {
    dispatch(setPacksPage(currentPage));
  };

  useEffect(() => {
    dispatch(setPacksParams({ page }));
  }, [dispatch, page]);

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <div className={styles.container}>
      <TableButton title="Packs list" nameButton="Add new pack" onAddClick={addPacks} />
      <div className={styles.interaction}>
        <Search getData={getPacks} searchParam="packName" queryParams={queryParams} />
        <FilteredButton />
        <NumberOfCards />
        <img
          className={styles.FilterRemoveBtn}
          src={FilterRemoveBtn}
          alt="delete filter button "
        />
      </div>

      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHeader
            firstCell="Name"
            secondCell="Cards"
            thirdCell="Last Updated"
            fourthCell="Created by"
            fifthCell="Actions"
          />
          <PacksTableBody />
        </Table>
      </TableContainer>

      <Paginator
        pageCount={pageCount}
        totalElements={cardPacksTotalCount}
        page={page}
        setPage={onPageChange}
      />
    </div>
  );
};
