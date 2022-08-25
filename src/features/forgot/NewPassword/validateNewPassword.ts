import * as Yup from 'yup';

import { MIN_PASSWORD_LENGTH } from 'common/constants/constants';

export const validateNewPassword = Yup.object().shape({
  password: Yup.string()
    .required('No password provided.')
    .min(MIN_PASSWORD_LENGTH, `Password should be ${MIN_PASSWORD_LENGTH} chars minimum.`)
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
