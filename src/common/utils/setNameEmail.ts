import { AppDispatch } from 'common/types/AppTypes';
import { MeResponseType } from 'common/types/ResponseTypes';
import { setEmail, setName } from 'features/auth/authReduser';

export const setNameEmail = (data: MeResponseType, dispatch: AppDispatch): void => {
  dispatch(setName(data.name));
  dispatch(setEmail(data.email));
};
