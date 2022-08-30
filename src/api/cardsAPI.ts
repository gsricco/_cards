import { instance } from './instance';

import {
  CardsParamsType,
  CreateCardType,
  UpdateCardDataType,
  CardsResponseType,
  CreateCardResponseType,
  RemoveCardResponseType,
  UpdateCardResponseType,
} from 'common';

export const cardsAPI = {
  getCards: (params: CardsParamsType) =>
    instance.get<CardsResponseType>('cards/card', { params }),

  createCard: (card: CreateCardType) =>
    instance.post<CreateCardResponseType>('cards/card', { card }),

  updateCard: (card: UpdateCardDataType) =>
    instance.put<UpdateCardResponseType>('cards/card', { card }),

  removeCard: (id: string) =>
    instance.delete<RemoveCardResponseType>(`cards/card?id=${id}`),
};
