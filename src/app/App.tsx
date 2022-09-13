import { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import styles from './App.module.css';
import { initialized } from './appReducer';
import { getIsInitialized } from './appSelectors';

import { Header, InfoSnackbar, RoutesPage } from 'common';
import { getIsLoggedIn } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  const isInitialized = useAppSelector(getIsInitialized);
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(initialized());
    }
  }, [isLoggedIn]);

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
