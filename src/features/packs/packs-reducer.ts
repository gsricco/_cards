import { AxiosError } from 'axios';

import { packsAPI } from 'api';
import { setAppStatus } from 'app';
import {
  AppThunk,
  RequestStatus,
  PacksParamsType,
  PacksActionTypes,
  PacksResponseType,
  CardsPacksType,
  AddCardsPackType,
  UpdatePackType,
  handleServerNetworkError,
} from 'common';

const initialState = {
  cardPacks: [] as CardsPacksType[],
  page: 1,
  pageCount: 0,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 0,
  queryParams: {} as PacksParamsType,
};

export const packsReducer = (
  state: InitialStateType = initialState,
  action: PacksActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'PACKS/SET-PACKS':
    case 'PACKS/SET-PACKS-PAGE':
    case 'PACKS/SET-PACKS-PARAMS':
    case 'PACKS/SET-PACKS-PAGE-COUNT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setPacks = (payload: PacksResponseType) =>
  ({ type: 'PACKS/SET-PACKS', payload } as const);
export const setPacksPage = (page: number) =>
  ({ type: 'PACKS/SET-PACKS-PAGE', payload: { page } } as const);
export const setPacksPageCount = (pageCount: number) =>
  ({ type: 'PACKS/SET-PACKS-PAGE-COUNT', payload: { pageCount } } as const);
export const setPacksParams = (queryParams: PacksParamsType) =>
  ({ type: 'PACKS/SET-PACKS-PARAMS', payload: { queryParams } } as const);

export const getPacks = (): AppThunk => async (dispatch, getState) => {
  const params = getState().packs.queryParams;

  try {
    dispatch(setAppStatus(RequestStatus.LOADING));
    const res = await packsAPI.getPacks(params);

    dispatch(setPacks(res.data));
  } catch (error) {
    handleServerNetworkError(error as AxiosError | Error, dispatch);
  } finally {
    dispatch(setAppStatus(RequestStatus.SUCCEEDED));
  }
};
export const addPacks =
  (cardsPack: AddCardsPackType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      await packsAPI.addPack(cardsPack);

      dispatch(getPacks());
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

      dispatch(getPacks());
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const changePacksName =
  (data: UpdatePackType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));

    try {
      await packsAPI.updatePackName(data);

      dispatch(getPacks());
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };

type InitialStateType = typeof initialState;
