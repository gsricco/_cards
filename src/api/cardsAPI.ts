import { instanceHeroku } from './instance';

import {
  CardsParamsType,
  CardsResponseType,
  CreateCardResponseType,
  CreateCardType,
  RemoveCardResponseType,
  UpdateCardDataType,
  UpdateCardResponseType,
} from 'common';

export const cardsAPI = {
  getCards: (params: CardsParamsType) =>
    instanceHeroku.get<CardsResponseType>('cards/card', { params }),

  createCard: (card: CreateCardType) =>
    instanceHeroku.post<CreateCardResponseType>('cards/card', { card }),

  updateCard: (card: UpdateCardDataType) =>
    instanceHeroku.put<UpdateCardResponseType>('cards/card', { card }),

  removeCard: (id: string) =>
    instanceHeroku.delete<RemoveCardResponseType>(`cards/card?id=${id}`),
};
