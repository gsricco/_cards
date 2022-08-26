import { FC, forwardRef, SyntheticEvent } from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { getError, getInfo, setAppError, setAppInfo } from 'app';
import { Nullable } from 'common';
import { useAppDispatch, useAppSelector } from 'hooks';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const InfoSnackbar: FC = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector<Nullable<string>>(getError);
  const info = useAppSelector<Nullable<string>>(getInfo);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setAppInfo(null));
    dispatch(setAppError(null));
  };

  const isOpen = error !== null || info !== null;

  return (
    <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={error ? 'error' : 'info'}
        sx={{ width: '100%' }}
      >
        {error || info}
      </Alert>
    </Snackbar>
  );
};
