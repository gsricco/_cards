import { ChangeEvent, FC } from 'react';

import { Button, Table, TableContainer } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

import styles from './Cards.module.scss';
import { CardsTableBody } from './CardsTableBody';

import arrowImage from 'assets/images/Arrow.png';
import { Paginator, Path, Search, TableButton, TableHeader } from 'common';
import {
  addPacks,
  getCardsPage,
  getCardsTotalCount,
  getIsLoggedIn,
  setCardPage,
} from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Cards: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const page = useAppSelector(getCardsPage);
  const cardTotalCount = useAppSelector(getCardsTotalCount);

  const cardsPerPage = 8;

  const onPageChange = (_: ChangeEvent<unknown>, currentPage: number): void => {
    dispatch(setCardPage(currentPage));
  };

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
      {cardTotalCount === 0 ? (
        <div className={styles.pagePackEmpty}>
          <p className={styles.pagePackEmptyDescription}>
            This pack is empty. Click add new card to fill this pack
          </p>
          <Button className={styles.pagePackEmptyBtn} variant="contained">
            Add new card
          </Button>
        </div>
      ) : (
        <>
          <TableButton
            title="Friend’s Pack"
            nameButton="Learn to pack"
            onAddClick={addPacks}
          />
          <div className={styles.interaction}>
            <Search />
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
            pageCount={cardsPerPage}
            totalElements={cardTotalCount}
            page={page}
            setPage={onPageChange}
          />
        </>
      )}
    </div>
  );
};
