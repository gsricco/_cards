import React, { FC, useEffect } from 'react';

import { Button, Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import arrowImage from '../../../assets/images/Arrow.png';

import styles from './Cards.module.scss';
import { CardsTableBody } from './CardsTableBody';

import { Paginator, Path, Search, TableButton, TableHeader } from 'common';
import {
  addPacks,
  getCards,
  getCardsPage,
  getCardsTotalCount,
  getIsLoggedIn,
  getPackCards,
} from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Cards: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const cards = useAppSelector(getPackCards);
  const page = useAppSelector(getCardsPage);
  const cardTotalCount = useAppSelector(getCardsTotalCount);

  const cardsPerPage = 8;

  useEffect(() => {
    dispatch(getCards({ cardsPack_id: '630d34521e20dab66ce7203d' }));
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileReturnBack}>
        <img alt="arrow" src={arrowImage} className={styles.profileReturnBackImg} />
        <span className={styles.profileReturnBackText}> Back to Packs List</span>
      </div>
      {cards.length === 0 ? (
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
          />
        </>
      ) : (
        <div className={styles.pagePackEmpty}>
          <p className={styles.pagePackEmptyDescription}>
            This pack is empty. Click add new card to fill this pack
          </p>
          <Button className={styles.pagePackEmptyBtn} variant="contained">
            Add new card
          </Button>
        </div>
      )}
    </div>
  );
};
