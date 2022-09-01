import { ChangeEvent, FC } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

import styles from './Cards.module.scss';
import { CardsTableBody } from './CardsTableBody';

import arrowImage from 'assets/images/Arrow.png';
import { Paginator, Path, Search, TableButton, TableHeader } from 'common';
import {
  addCard,
  getCards,
  getCardsPage,
  getCardsPageCount,
  getCardsQueryParams,
  getCardsTotalCount,
  getCardUserId,
  getId,
  getIsLoggedIn,
  setCardPage,
} from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Cards: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const page = useAppSelector(getCardsPage);
  const cardTotalCount = useAppSelector(getCardsTotalCount);
  const queryParams = useAppSelector(getCardsQueryParams);
  const pageCount = useAppSelector(getCardsPageCount);
  const myPack = useAppSelector(getId) === useAppSelector(getCardUserId);

  const onPageChange = (_: ChangeEvent<unknown>, currentPage: number): void => {
    dispatch(setCardPage(currentPage));
  };

  const onAddNewCardHandle = (): void => {
    dispatch(addCard());
  };

  const packTitle = myPack ? (
    <TableButton
      title="My Pack"
      nameButton="Add new card"
      onAddClick={onAddNewCardHandle}
    />
  ) : (
    <TableButton
      title="Friend’s Pack"
      nameButton="Learn to pack"
      onAddClick={onAddNewCardHandle}
    />
  );

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileReturnBack}>
        <Link to={Path.PACKS} className={styles.profileLinkContainer}>
          <img alt="arrow" src={arrowImage} className={styles.profileReturnBackImg} />
          <span className={styles.profileReturnBackText}> Back to Packs List</span>
        </Link>
      </div>

      {packTitle}

      <div className={styles.interaction}>
        <Search
          width="1007px"
          getData={getCards}
          queryParams={queryParams}
          searchParam="cardQuestion"
        />
      </div>

      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHeader
            firstCell="Question"
            secondCell="Answer"
            thirdCell="Last Updated"
            fourthCell="Grade"
          />
          <CardsTableBody />
        </Table>
      </TableContainer>

      <Paginator
        pageCount={pageCount}
        totalElements={cardTotalCount}
        page={page}
        setPage={onPageChange}
      />
    </div>
  );
};
