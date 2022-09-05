import { AxiosError } from 'axios';

import { cardsAPI } from 'api';
import { setAppStatus } from 'app';
import {
  CardsResponseType,
  CardsParamsType,
  CardsActionTypes,
  AppThunk,
  RequestStatus,
  CardsType,
  handleServerNetworkError,
  CreateCardType,
  UpdateCardDataType,
} from 'common';

const initialState = {
  cards: [] as CardsType[],
  packUserId: '',
  cardsPack_id: '',
  page: 1,
  pageCount: 0,
  cardsTotalCount: 0,
  minGrade: 0,
  maxGrade: 0,
  queryParams: {} as CardsParamsType,
};

export const cardsReducer = (
  state: InitialStateType = initialState,
  action: CardsActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'CARDS/SET-CARDS':
    case 'CARDS/SET-CARDS-PARAMS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setCards = (data: CardsResponseType) =>
  ({ type: 'CARDS/SET-CARDS', payload: data } as const);
export const setCardsParams = (params: CardsParamsType) =>
  ({ type: 'CARDS/SET-CARDS-PARAMS', payload: { queryParams: params } } as const);

export const getCards = (): AppThunk => async (dispatch, getState) => {
  const params = getState().cards.queryParams;

  dispatch(setAppStatus(RequestStatus.LOADING));
  try {
    const res = await cardsAPI.getCards(params);

    dispatch(setCards(res.data));
  } catch (error) {
    handleServerNetworkError(error as AxiosError | Error, dispatch);
  } finally {
    dispatch(setAppStatus(RequestStatus.SUCCEEDED));
  }
};
export const addCard =
  (data: CreateCardType): AppThunk =>
  async dispatch => {
    // const { cardsPack_id } = getState().cards.queryParams;

    dispatch(setAppStatus(RequestStatus.LOADING));

    try {
      await cardsAPI.createCard({ ...data });

      dispatch(getCards());
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const changeCard =
  (data: UpdateCardDataType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));

    try {
      await cardsAPI.updateCard({ ...data });

      dispatch(getCards());
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
export const deleteCard =
  (id: string): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));

    try {
      await cardsAPI.removeCard(id);

      dispatch(getCards());
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };

type InitialStateType = typeof initialState;
