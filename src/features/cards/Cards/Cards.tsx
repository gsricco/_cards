import { FC } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

import styles from './Cards.module.scss';
import { CardsFooter } from './CardsFooter';
import { CardsSettings } from './CardsSettings';
import { CardsTableBody } from './CardsTableBody';

import arrowImage from 'assets/images/Arrow.png';
import { Path, TableHeader } from 'common';
import { getIsLoggedIn } from 'features';
import { useAppSelector } from 'hooks';

export const Cards: FC = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

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
