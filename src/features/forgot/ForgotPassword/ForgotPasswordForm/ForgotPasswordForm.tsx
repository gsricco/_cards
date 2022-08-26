import { FC } from 'react';

import { Button, Typography } from '@mui/material';
import { Form, FormikProps } from 'formik';

import styles from '../ForgotPassword.module.scss';

import { EmailForm, ForgotPasswordType } from 'common';

type Props = {
  formik: FormikProps<ForgotPasswordType>;
};

export const ForgotPasswordForm: FC<Props> = ({ formik }) => {
  const { isValid, dirty, isSubmitting, handleBlur } = { ...formik };

  return (
    <Form>
      <EmailForm
        name="email"
        label="Email"
        onInputBlur={handleBlur}
        className={styles.fields}
      />
      <Typography gutterBottom variant="subtitle1" className={styles.gridItemDescription}>
        Enter your email address and we will send you
        <br />
        further instruction
      </Typography>
      <Button
        disabled={!isValid || !dirty || isSubmitting}
        type="submit"
        variant="contained"
        color="primary"
        className={styles.gridItemButton}
      >
        Send Instructions
      </Button>
    </Form>
  );
};
