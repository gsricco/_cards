import * as Yup from 'yup';

import { MIN_PASSWORD_LENGTH } from 'common/constants/constants';

export const validateRegistration = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(MIN_PASSWORD_LENGTH, `Password should be ${MIN_PASSWORD_LENGTH} chars minimum.`)
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
