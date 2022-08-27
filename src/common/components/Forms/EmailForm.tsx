import { FC } from 'react';

import { FormHelperText, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useField } from 'formik';

type Props = {
  name: string;
  label: string;
  className: string;
};

export const EmailForm: FC<Props> = ({ name, label, className }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl variant="standard" fullWidth className={className}>
      <InputLabel>{label}</InputLabel>
      <Input {...field} type="email" margin="dense" />
      {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
    </FormControl>
  );
};
