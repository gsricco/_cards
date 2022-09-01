import { ChangeEvent, FC, useEffect, useState } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import styles from './Packs.module.scss';

import FilterRemoveBtn from 'assets/images/FilterRemoveBtn.svg';
import {
  FilteredButton,
  NumberOfCards,
  Paginator,
  Path,
  Search,
  sortPacks,
  SortPacks,
  TableButton,
  TableHeader,
} from 'common';
import MenuPageCount from 'common/components/MenuPageCount/MenuPageCount';
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

  const [changeSortPack, setChangeSortPack] = useState(true);

  const getSortDatePack = (): void => {
    sortPacks(
      dispatch,
      changeSortPack,
      setChangeSortPack,
      SortPacks.UPDATED,
      queryParams,
    );
  };
  const getSortCardPack = (): void => {
    sortPacks(
      dispatch,
      changeSortPack,
      setChangeSortPack,
      SortPacks.CARDS_COUNT,
      queryParams,
    );
  };
  const getSortNamePack = (): void => {
    sortPacks(dispatch, changeSortPack, setChangeSortPack, SortPacks.NAME, queryParams);
  };
  const getSortUserNamePack = (): void => {
    sortPacks(
      dispatch,
      changeSortPack,
      setChangeSortPack,
      SortPacks.USER_NAME,
      queryParams,
    );
  };
  const resetFilter = (): void => {
    dispatch(
      setPacksParams({
        sortPacks: undefined,
        min: 0,
        max: 110,
        page: undefined,
        packName: undefined,
        pageCount: undefined,
      }),
    );
  };

  const onPageChange = (_: ChangeEvent<unknown>, currentPage: number): void => {
    dispatch(setPacksPage(currentPage));
  };

  const onCreatePackHandle = (): void => {
    dispatch(addPacks());
  };

  useEffect(() => {
    dispatch(setPacksParams({ ...queryParams, page, pageCount }));
  }, [dispatch, page]);

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <div className={styles.container}>
      <TableButton
        title="Packs list"
        nameButton="Add new pack"
        onAddClick={onCreatePackHandle}
      />
      <div className={styles.interaction}>
        <Search getData={getPacks} searchParam="packName" queryParams={queryParams} />
        <FilteredButton />
        <NumberOfCards />
        <button className={styles.buttonRemoveBtn} type="button" onClick={resetFilter}>
          <img
            className={styles.filterRemoveBtn}
            src={FilterRemoveBtn}
            alt="delete filter button "
          />
        </button>
      </div>
      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHeader
            firstCell="Name"
            secondCell="Cards"
            thirdCell="Last Updated"
            fourthCell="Created by"
            fifthCell="Actions"
            sortFirstCell={getSortDatePack}
            sortSecondCell={getSortCardPack}
            sortThirdCell={getSortNamePack}
            sortFourthCell={getSortUserNamePack}
          />
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
