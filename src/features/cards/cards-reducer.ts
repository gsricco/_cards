import { AxiosError } from 'axios';

import { cardsAPI } from 'api';
import { setAppStatus } from 'app';
import {
  CardsResponseType,
  CardsType,
  CardsParamsType,
  CardsActionTypes,
  AppThunk,
  RequestStatus,
  handleServerNetworkError,
} from 'common';

const initialState: CardsResponseType = {
  cards: [],
  page: 0,
  pageCount: 0,
  cardsTotalCount: 0,
  minGrade: 0,
  maxGrade: 0,
};

export const cardsReducer = (
  state: CardsResponseType = initialState,
  action: CardsActionTypes,
): CardsResponseType => {
  switch (action.type) {
    case 'CARDS/SET-CARDS':
    case 'CARDS/SET-CARDS-PAGE':
    case 'CARDS/POST-CARDS':
    case 'CARDS/UPDATE-CARD-NAME':
      return { ...state, ...action.payload };
    case 'CARDS/REMOVE-CARD':
      return {
        ...state,
        cards: state.cards.filter(card => card._id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const setCard = (data: CardsResponseType) =>
  ({ type: 'CARDS/SET-CARDS', payload: data } as const);
export const postCard = (data: CardsType[]) =>
  ({ type: 'CARDS/SET-CARDS-PAGE', payload: { cardPacks: data } } as const);
export const setCardPage = (page: number) =>
  ({ type: 'CARDS/POST-CARDS', payload: { page } } as const);
export const updateCard = (id: string) =>
  ({ type: 'CARDS/UPDATE-CARD-NAME', payload: { id } } as const);
export const removeCard = (id: string) =>
  ({ type: 'CARDS/REMOVE-CARD', payload: { id } } as const);

export const getCards =
  (params: CardsParamsType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));
    try {
      const res = await cardsAPI.getCards(params);

      dispatch(setCard(res.data));
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };
