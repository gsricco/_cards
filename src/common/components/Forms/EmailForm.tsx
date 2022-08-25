import { FC, FocusEvent } from 'react';

import { FormHelperText, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useField } from 'formik';

type Props = {
  name: string;
  label: string;
  onInputBlur: (event: FocusEvent<HTMLInputElement>) => void;
  className: string;
};

export const EmailForm: FC<Props> = ({ name, onInputBlur, label, className }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl variant="standard" fullWidth className={className}>
      <InputLabel>{label}</InputLabel>
      <Input {...field} type="email" margin="dense" onBlur={onInputBlur} />
      {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
    </FormControl>
  );
};
