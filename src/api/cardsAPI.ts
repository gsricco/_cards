import { instance } from './instance/instance';

import {
  CardsParamsType,
  CreateCardType,
  UpdateCardDataType,
} from 'common/types/DataTypes';
import {
  CardsResponseType,
  CreateCardResponseType,
  RemoveCardResponseType,
  UpdateCardResponseType,
} from 'common/types/ResponseTypes';

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
