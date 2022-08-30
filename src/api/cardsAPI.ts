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

  createCard: (data: CreateCardType) =>
    instance.post<CreateCardResponseType>('cards/card', data),

  updateCard: (data: UpdateCardDataType) =>
    instance.put<UpdateCardResponseType>('cards/card', data),

  removeCard: (id: string) =>
    instance.delete<RemoveCardResponseType>(`cards/card?id=${id}`),
};
