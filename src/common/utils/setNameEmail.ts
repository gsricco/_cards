import { AppDispatch, MeResponseType } from 'common';
import { setEmail, setName } from 'features';

export const setNameEmail = (data: MeResponseType, dispatch: AppDispatch): void => {
  dispatch(setName(data.name));
  dispatch(setEmail(data.email));
};
