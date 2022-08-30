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
  cardPacks: [],
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
    case 'PACKS/SET-PACKS-PAGE':
    case 'PACKS/POST-PACKS':
    case 'PACKS/UPDATE-PACK-NAME':
      return { ...state, ...action.payload };
    case 'PACKS/REMOVE-PACK':
      return {
        ...state,
        cardPacks: state.cardPacks.filter(card => card._id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const setPacks = (data: PacksResponseType) =>
  ({ type: 'PACKS/SET-PACKS', payload: data } as const);
export const postPacks = (data: CardsPacksType[]) =>
  ({ type: 'PACKS/POST-PACKS', payload: { cardPacks: data } } as const);
export const setPacksPage = (page: number) =>
  ({ type: 'PACKS/SET-PACKS-PAGE', payload: { page } } as const);
export const updatePack = (id: string) =>
  ({ type: 'PACKS/UPDATE-PACK-NAME', payload: { id } } as const);
export const removePack = (id: string) =>
  ({ type: 'PACKS/REMOVE-PACK', payload: { id } } as const);

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
export const addPacks = (): AppThunk => async dispatch => {
  dispatch(setAppStatus(RequestStatus.LOADING));
  try {
    await packsAPI.addPack();

    dispatch(getPacks({ pageCount: 8 }));
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

      dispatch(removePack(id));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(getPacks({ pageCount: 8 }));
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const changePacksName =
  (id: string): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));

    try {
      await packsAPI.updatePackName(id);

      dispatch(updatePack(id));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(getPacks({ pageCount: 8 }));
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
