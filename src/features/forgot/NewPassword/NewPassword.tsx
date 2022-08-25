import { FC } from 'react';

import { FormLabel, Grid } from '@mui/material';
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import { updatePassword } from '../forgot-reducer';

import styles from './NewPassword.module.scss';
import { NewPasswordForm } from './NewPasswordForm';
import { validateNewPassword } from './validateNewPassword';

import { NewPasswordType, Path } from 'common';
import { useAppDispatch } from 'hooks';

export const NewPassword: FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" className={styles.newPasswordContainer}>
      <Grid item>
        <FormLabel>
          <p className={styles.newPasswordHeaderText}>Create new password</p>
          <Formik
            initialValues={{ password: '' } as NewPasswordType}
            validationSchema={validateNewPassword}
            onSubmit={values => {
              if (token) {
                dispatch(
                  updatePassword({
                    password: values.password,
                    resetPasswordToken: token,
                  }),
                );
              }
              navigate(Path.LOGIN);
            }}
          >
            {formik => <NewPasswordForm formik={formik} />}
          </Formik>
        </FormLabel>
      </Grid>
    </Grid>
  );
};
