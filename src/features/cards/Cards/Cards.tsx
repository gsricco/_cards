import { FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';

import { setCardsParams } from '../cardsReducer';
import { getCardsPackId } from '../cardsSelectors';

import styles from './Cards.module.scss';
import { CardsFooter } from './CardsFooter/CardsFooter';
import { CardsSettings } from './CardsSettings/CardsSettings';
import { CardsTableBody } from './CardsTableBody/CardsTableBody';

import { BackToPackList } from 'common/components/BackToPacksList/BackToPackList';
import { TableHeader } from 'common/components/TableHeader/TableHeader';
import { Path } from 'common/enums/path';
import { getIsLoggedIn } from 'features/auth/authSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

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
