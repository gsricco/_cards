import { FC } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useField } from 'formik';

type Props = {
  showPass: boolean;
  name: string;
  label: string;
  onIconClick: () => void;
  className: string;
};

export const PasswordForm: FC<Props> = ({
  showPass,
  name,
  label,
  onIconClick,
  className,
}) => {
  const [field, meta] = useField(name);

  return (
    <FormControl variant="standard" fullWidth className={className}>
      <InputLabel>{label}</InputLabel>
      <Input
        type={showPass ? 'text' : 'password'}
        margin="dense"
        {...field}
        name={name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={onIconClick}>
              {showPass ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
    </FormControl>
  );
};
