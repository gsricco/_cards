import { FC } from 'react';

import { FormLabel, Grid } from '@mui/material';
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import { updatePassword } from '../forgotReducer';

import styles from './NewPassword.module.scss';
import { NewPasswordForm } from './NewPasswordForm/NewPasswordForm';
import { validateNewPassword } from './validateNewPassword';

import { Path } from 'common/enums/path';
import { NewPasswordType } from 'common/types/FormikTypes';
import { useAppDispatch } from 'hooks/redux-hooks';

export const NewPassword: FC = () => {
  const dispatch = useAppDispatch();

  const { token } = useParams();
  const navigate = useNavigate();

  const onFormSubmit = (password: string): void => {
    if (token) {
      dispatch(updatePassword({ password, resetPasswordToken: token }));
    }
    navigate(Path.LOGIN);
  };

  return (
    <Grid container justifyContent="center" className={styles.newPasswordContainer}>
      <Grid item>
        <FormLabel>
          <p className={styles.newPasswordHeaderText}>Create new password</p>
          <Formik
            initialValues={{ password: '' } as NewPasswordType}
            validationSchema={validateNewPassword}
            onSubmit={values => onFormSubmit(values.password)}
          >
            {formik => <NewPasswordForm formik={formik} />}
          </Formik>
        </FormLabel>
      </Grid>
    </Grid>
  );
};
