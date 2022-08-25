import { FC } from 'react';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Form, FormikProps } from 'formik';

import styles from '../NewPassword.module.scss';

import { NewPasswordType, PasswordForm } from 'common';
import { useShowEar } from 'hooks';

type Props = {
  formik: FormikProps<NewPasswordType>;
};

export const NewPasswordForm: FC<Props> = ({ formik }) => {
  const { showPassword, onButtonIconClick } = useShowEar();

  const { isValid, dirty, isSubmitting } = { ...formik };

  return (
    <Form>
      <PasswordForm
        showPass={showPassword}
        name="password"
        label="Password"
        onIconClick={onButtonIconClick}
        className={styles.fields}
      />
      <Typography
        gutterBottom
        variant="subtitle1"
        className={styles.newPasswordDescription}
      >
        Create new password and we will send you
        <br />
        further instructions to email
      </Typography>
      <Button
        className={styles.newPasswordButton}
        disabled={!isValid || !dirty || isSubmitting}
        type="submit"
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
    </Form>
  );
};
