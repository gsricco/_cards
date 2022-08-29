import { CardsParamsType, CreateCardType } from '../common/types/DataTypes';
import { CardsResponseType } from '../common/types/ResponseTypes';

import { instance } from './instance';

export const cardsAPI = {
  getCards: (params: CardsParamsType) =>
    instance.get<CardsResponseType>('cards/card', { params }),

  createCard: (data: CreateCardType) => instance.post('cards/card', data),
};
