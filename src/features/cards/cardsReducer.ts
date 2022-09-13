import { AxiosError } from 'axios';

import { cardsAPI, gradeAPI } from 'api';
import { setAppStatus } from 'app';
import {
  CardsResponseType,
  CardsParamsType,
  CardsActionTypes,
  AppThunk,
  RequestStatus,
  CardsType,
  CreateCardType,
  UpdateCardDataType,
  UpdateGradeDataType,
  handleServerNetworkError,
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
    case 'CARDS/SET-LEARN-GRADE':
      return {
        ...state,
        cards: state.cards.map(card =>
          card._id === action.payload.card_id
            ? { ...card, grade: action.payload.grade }
            : card,
        ),
      };
    default:
      return state;
  }
};

export const setCards = (payload: CardsResponseType) =>
  ({ type: 'CARDS/SET-CARDS', payload } as const);
export const setCardsParams = (queryParams: CardsParamsType) =>
  ({ type: 'CARDS/SET-CARDS-PARAMS', payload: { queryParams } } as const);
export const updateCardGrade = (payload: UpdateGradeDataType) =>
  ({ type: 'CARDS/SET-LEARN-GRADE', payload } as const);

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
export const setLearnGrade =
  (data: UpdateGradeDataType): AppThunk =>
  async dispatch => {
    dispatch(setAppStatus(RequestStatus.LOADING));

    try {
      await gradeAPI.updateGrade(data);

      dispatch(getCards());
    } catch (error) {
      handleServerNetworkError(error as AxiosError | Error, dispatch);
    } finally {
      dispatch(setAppStatus(RequestStatus.SUCCEEDED));
    }
  };

type InitialStateType = typeof initialState;
