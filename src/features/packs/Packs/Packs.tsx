import { ChangeEvent, FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { getMaxPacksCount, getMinPacksCount } from '../packs-selectors';

import styles from './Packs.module.scss';

import FilterRemoveBtn from 'assets/images/FilterRemoveBtn.svg';
import {
  DiscreteSlider,
  FilteredButton,
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
  getPacks,
  getPage,
  PacksTableBody,
  setPacksPage,
} from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Packs: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const page = useAppSelector(getPage);
  const cardPacksTotalCount = useAppSelector(getCardPacksTotalCount);
  const minCardsCount = useAppSelector(getMinPacksCount);
  const maxCardsCount = useAppSelector(getMaxPacksCount);

  const packsPerPage = 8;

  const onPageChange = (_: ChangeEvent<unknown>, currentPage: number): void => {
    dispatch(setPacksPage(currentPage));
  };

  useEffect(() => {
    dispatch(getPacks({ page, pageCount: packsPerPage }));
  }, [page, dispatch]);

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <div className={styles.container}>
      <TableButton title="Packs list" nameButton="Add new pack" onAddClick={addPacks} />
      <div className={styles.interaction}>
        <Search />
        <FilteredButton />
        <DiscreteSlider minCardsCount={minCardsCount} maxCardsCount={maxCardsCount} />
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
        pageCount={packsPerPage}
        totalElements={cardPacksTotalCount}
        page={page}
        setPage={onPageChange}
      />
    </div>
  );
};
