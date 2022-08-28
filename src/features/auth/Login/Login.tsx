import { FC } from 'react';

import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { Formik } from 'formik';
import { Navigate } from 'react-router-dom';

import styles from './Login.module.scss';
import { LoginForm } from './LoginForm';
import { validateLogin } from './validateLogin';

import { LoginType, Path } from 'common';
import { getIsLoggedIn, login } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={Path.PACKS} />;
  }

  return (
    <Grid container justifyContent="center" className={styles.loginContainer}>
      <Grid item justifyContent="center">
        <FormLabel>
          <p className={styles.loginHeaderText}>Sign in</p>
        </FormLabel>
        <Formik
          initialValues={{ email: '', password: '', rememberMe: false } as LoginType}
          validationSchema={validateLogin}
          onSubmit={values => dispatch(login(values))}
        >
          {formik => <LoginForm formik={formik} />}
        </Formik>
      </Grid>
    </Grid>
  );
};
