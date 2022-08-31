import { FC } from 'react';

import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { Formik } from 'formik';
import { Navigate } from 'react-router-dom';

import styles from './Registration.module.scss';
import { RegistrationForm } from './RegistrationForm';
import { validateRegistration } from './validateRegistration';

import { Path, RegistrationType } from 'common';
import { register, getIsRegistration } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Registration: FC = () => {
  const dispatch = useAppDispatch();

  const isRegistration = useAppSelector(getIsRegistration);

  if (isRegistration) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <Grid container justifyContent="center" className={styles.registrationContainer}>
      <Grid item justifyContent="center">
        <FormLabel>
          <p className={styles.registrationHeaderText}>Sing Up</p>
        </FormLabel>
        <Formik
          initialValues={
            { email: '', password: '', confirmPassword: '' } as RegistrationType
          }
          validationSchema={validateRegistration}
          onSubmit={values => dispatch(register(values))}
        >
          {formik => <RegistrationForm formik={formik} />}
        </Formik>
      </Grid>
    </Grid>
  );
};
