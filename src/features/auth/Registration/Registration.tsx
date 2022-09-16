import { FC } from 'react';

import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { Formik } from 'formik';
import { Navigate } from 'react-router-dom';

import { register } from '../authReduser';
import { getIsRegistration } from '../authSelectors';

import styles from './Registration.module.scss';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { validateRegistration } from './validateRegistration';

import { Path } from 'common/enums/path';
import { RegistrationType } from 'common/types/FormikTypes';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

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
