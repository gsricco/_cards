import * as Yup from 'yup';

import { MIN_PASSWORD_LENGTH } from 'common/constants/constants';

export const validateLogin = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(MIN_PASSWORD_LENGTH, `Password should be ${MIN_PASSWORD_LENGTH} chars minimum.`),
});
