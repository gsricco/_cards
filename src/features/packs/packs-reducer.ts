import { AxiosError } from 'axios';

import { packsAPI } from 'api';
import { setAppStatus } from 'app';
import {
  AppThunk,
  RequestStatus,
  PacksParamsType,
  PacksActionTypes,
  CardsPacksType,
  PacksType,
  handleServerNetworkError,
} from 'common';

const initialState: PacksType = {
  cardPacks: [] as CardsPacksType[],
  page: 1,
  pageCount: 0,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 0,
};

export const packsReducer = (
  state: PacksType = initialState,
  action: PacksActionTypes,
): PacksType => {
  switch (action.type) {
    case 'PACKS/SET-PACKS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setPacks = (data: CardsPacksType[]) =>
  ({ type: 'PACKS/SET-PACKS', payload: data } as const);

export const getPacks =
  (params: PacksParamsType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      const res = await packsAPI.getPacks(params);

      dispatch(setPacks(res.data));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
