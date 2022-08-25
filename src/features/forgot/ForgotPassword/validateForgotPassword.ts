import * as Yup from 'yup';

export const validateForgotPassword = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
});
