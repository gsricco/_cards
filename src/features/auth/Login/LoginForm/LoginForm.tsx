import { FC } from 'react';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Form, FormikProps } from 'formik';
import { Link } from 'react-router-dom';

import styles from '../Login.module.scss';

import { Path, LoginType, EmailForm, PasswordForm } from 'common';
import { useShow } from 'hooks';

type Props = {
  formik: FormikProps<LoginType>;
};

export const LoginForm: FC<Props> = ({ formik }) => {
  const { show, onButtonIconClick } = useShow();

  const { isValid, dirty, isSubmitting, handleChange, values } = { ...formik };

  return (
    <Form>
      <EmailForm name="email" label="Email" className={styles.fields} />
      <PasswordForm
        className={styles.fields}
        showPass={show}
        name="password"
        label="Password"
        onIconClick={onButtonIconClick}
      />
      <FormControlLabel
        className={styles.checkboxField}
        label="Remember me"
        control={
          <Checkbox
            name="rememberMe"
            onChange={handleChange}
            checked={values.rememberMe}
          />
        }
      />
      <Link to={Path.FORGOT_PASSWORD} className={styles.loginForgotPassword}>
        Forgot Password?
      </Link>
      <Button
        disabled={!isValid || !dirty || isSubmitting}
        className={styles.loginButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
      <p className={styles.loginDescription}>Already have an account?</p>
      <Link to={Path.REGISTRATION} className={styles.loginSignUp}>
        Sign Up
      </Link>
    </Form>
  );
};
