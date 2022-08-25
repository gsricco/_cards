import { FC } from 'react';

import { Container, Grid, Paper, Typography } from '@mui/material';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { recoverPassword } from '../forgot-reducer';

import styles from './ForgotPassword.module.scss';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { validateForgotPassword } from './validateForgotPassword';

import { Path, ForgotPasswordType } from 'common';
import { useAppDispatch } from 'hooks';

export const ForgotPassword: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" className={styles.container}>
      <Grid item className={styles.gridItem}>
        <Paper className={styles.gridItemPaper}>
          <Typography className={styles.gridItemHeader} variant="h2" component="h2">
            Forgot your password?
          </Typography>
          <Formik
            initialValues={{ email: '' } as ForgotPasswordType}
            validationSchema={validateForgotPassword}
            onSubmit={(values: ForgotPasswordType) => {
              dispatch(recoverPassword(values.email));
              navigate(Path.CHECK_EMAIL);
            }}
          >
            {formik => <ForgotPasswordForm formik={formik} />}
          </Formik>
          <Typography
            gutterBottom
            variant="subtitle1"
            className={styles.gridItemQuestion}
          >
            Did you remember your password?
          </Typography>
          <Link to={Path.LOGIN} className={styles.gridItemLink}>
            Try logging in
          </Link>
        </Paper>
      </Grid>
    </Container>
  );
};
