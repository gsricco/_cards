import axios, { AxiosError } from 'axios';

import { setAppError, setAppStatus } from 'app';
import { AppDispatch, RequestStatus } from 'common';

export const handleServerNetworkError = (
  error: Error | AxiosError<{ error: string }>,
  dispatch: AppDispatch,
): void => {
  const err = error as Error | AxiosError<{ error: string }>;

  if (axios.isAxiosError(err)) {
    dispatch(
      setAppError(err.response?.data ? err.response.data?.error : 'Some error occurred'),
    );
    dispatch(setAppStatus(RequestStatus.FAILED));
  } else {
    dispatch(setAppError(`Native error ${err.message}`));
  }
};
