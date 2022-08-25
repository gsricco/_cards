import { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { initialized } from './app-reducer';
import { getIsInitialized } from './app-selectors';
import styles from './App.module.css';

import { RoutesPage, Header, InfoSnackbar } from 'common';
import { useAppDispatch, useAppSelector } from 'hooks';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector<boolean>(getIsInitialized);

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
      <RoutesPage />
    </div>
  );
};
