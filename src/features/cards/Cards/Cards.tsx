import { FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';

import styles from './Cards.module.scss';
import { CardsFooter } from './CardsFooter';
import { CardsSettings } from './CardsSettings';
import { CardsTableBody } from './CardsTableBody';

import { BackToPackList, Path, TableHeader } from 'common';
import { getCardsPackId, getIsLoggedIn, setCardsParams } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Cards: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const cardsPack_id = useAppSelector(getCardsPackId);

  const { id } = useParams();

  useEffect(() => {
    if (!cardsPack_id && id) {
      dispatch(setCardsParams({ cardsPack_id: id }));
    }
  }, []);

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <div className={styles.container}>
      <BackToPackList />
      <CardsSettings />

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

      <CardsFooter />
    </div>
  );
};
