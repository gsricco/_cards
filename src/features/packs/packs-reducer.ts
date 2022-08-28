import { AxiosError } from 'axios';

import { packsAPI } from 'api';
import { setAppStatus } from 'app';
import {
  AppThunk,
  RequestStatus,
  PacksParamsType,
  PacksActionTypes,
  CardsPacksType,
  PacksResponseType,
  handleServerNetworkError,
} from 'common';

const initialState: PacksResponseType = {
  cardPacks: [] as CardsPacksType[],
  page: 1,
  pageCount: 0,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 0,
};

export const packsReducer = (
  state: PacksResponseType = initialState,
  action: PacksActionTypes,
): PacksResponseType => {
  switch (action.type) {
    case 'PACKS/SET-PACKS':
      return { ...state, ...action.payload };
    case 'PACKS/DELETE-PACKS':
      return {
        ...state,
        cardPacks: state.cardPacks.filter(card => card._id !== action.payload.id),
      };
    case 'PACKS/PACKS-PAGE':
      return { ...state, page: action.page };
    default:
      return state;
  }
};

export const setPacks = (data: CardsPacksType[]) =>
  ({ type: 'PACKS/SET-PACKS', payload: data } as const);
export const deletePacks = (id: string) =>
  ({ type: 'PACKS/DELETE-PACKS', payload: { id } } as const);
export const setPacksPage = (page: number) =>
  ({ type: 'PACKS/PACKS-PAGE', page } as const);

export const getPacks =
  (params: PacksParamsType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      const res = await packsAPI.getPacks(params);

      // @ts-ignore
      dispatch(setPacks(res.data));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const deletePack =
  (id: string): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      await packsAPI.deletePack(id);

      dispatch(deletePacks(id));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const changePacksPage =
  (page: number): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      dispatch(setPacksPage(page));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
