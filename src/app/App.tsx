import { FC, useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import styles from './App.module.css';
import { initialized } from './appReducer';
import { getIsInitialized } from './appSelectors';

import { Header } from 'common/components/Header/Header';
import { InfoSnackbar } from 'common/components/InfoSnackbar/InfoSnackbar';
import { RoutesPage } from 'common/components/RoutesPage/RoutesPage';
import { getIsLoggedIn } from 'features/auth/authSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

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
