import { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { initialized } from './app-reducer';
import { getIsInitialized } from './app-selectors';
import styles from './App.module.css';

import { InfoSnackbar, Header, RoutesPage } from 'common';
import { PacksTable } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(getIsInitialized);

  useEffect(() => {
    dispatch(initialized());
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <div className={styles.preloader}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <InfoSnackbar />
      <Header />
      <PacksTable />
      <RoutesPage />
    </div>
  );
};
