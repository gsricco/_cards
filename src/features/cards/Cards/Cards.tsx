import React, { FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { Paginator, Path, TableHeader } from '../../../common';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getIsLoggedIn } from '../../auth';
import { getCards } from '../cards-reducer';
import { getCardsPage, getCardsTotalCount } from '../cards-selectors';

import styles from './Cards.module.scss';
import { CardsTableBody } from './CardsTableBody/CardsTableBody';

export const Cards: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
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
      <Paginator pageCount={cardsPerPage} totalElements={cardTotalCount} page={page} />
    </div>
  );
};
