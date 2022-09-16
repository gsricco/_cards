import { FC } from 'react';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Form, FormikProps } from 'formik';

import styles from '../NewPassword.module.scss';

import { PasswordForm } from 'common/components/Forms/PasswordForm';
import { NewPasswordType } from 'common/types/FormikTypes';
import { useShow } from 'hooks/useShow';

type Props = {
  formik: FormikProps<NewPasswordType>;
};

export const NewPasswordForm: FC<Props> = ({ formik }) => {
  const { show, onButtonIconClick } = useShow();

  const { isValid, dirty, isSubmitting } = { ...formik };

  return (
    <Form>
      <PasswordForm
        showPass={show}
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
