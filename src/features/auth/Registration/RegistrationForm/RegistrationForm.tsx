import { FC } from 'react';

import Button from '@mui/material/Button';
import { Form, FormikProps } from 'formik';
import { Link } from 'react-router-dom';

import styles from '../Registration.module.scss';

import { Path, RegistrationType, EmailForm, PasswordForm } from 'common';
import { useShow } from 'hooks';

type Props = {
  formik: FormikProps<RegistrationType>;
};

export const RegistrationForm: FC<Props> = ({ formik }) => {
  const { show, showConfirm, onButtonIconClick, onButtonIconConfirmClick } = useShow();

  const { isValid, dirty, isSubmitting, values } = { ...formik };

  return (
    <Form>
      <EmailForm className={styles.fields} name="email" label="Email" />
      <PasswordForm
        className={styles.fields}
        showPass={show}
        name="password"
        label="Password"
        onIconClick={onButtonIconClick}
      />
      <PasswordForm
        className={styles.fields}
        showPass={showConfirm}
        name="confirmPassword"
        label="Confirm Password"
        onIconClick={onButtonIconConfirmClick}
      />
      <Button
        disabled={
          !isValid || !dirty || isSubmitting || values.password !== values.confirmPassword
        }
        className={styles.registrationButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
      <p className={styles.registrationDescription}>Already have an account?</p>
      <Link to={Path.LOGIN} className={styles.registrationSignUp}>
        Sign in
      </Link>
    </Form>
  );
};
