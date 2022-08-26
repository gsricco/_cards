import { FC } from 'react';

import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './Error404.module.scss';

import Error404Image from 'assets/images/404.svg';
import { Path } from 'common';
import { getIsLoggedIn } from 'features';
import { useAppSelector } from 'hooks';

export const Error404: FC = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <Grid container className={styles.error404Container}>
      <Grid item justifyContent="center" className={styles.error404Item}>
        <div className={styles.error404Content}>
          <h2 className={styles.error404Header}>Ooops!</h2>
          <span className={styles.error404Description}>Sorry! Page not found!</span>
          <Link
            to={isLoggedIn ? Path.PROFILE : Path.LOGIN}
            className={styles.error404Link}
          >
            <Button variant="contained" color="primary" className={styles.error404Button}>
              Back to home page
            </Button>
          </Link>
        </div>
        <img src={Error404Image} alt="Error404" />
      </Grid>
    </Grid>
  );
};
