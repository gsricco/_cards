import { CardsParamsType, CreateCardType } from '../common/types/DataTypes';
import { CardsResponseType } from '../common/types/ResponseTypes';

import { instanceHeroku } from './instance';

export const cardsAPI = {
  getCards: (params: CardsParamsType) =>
    instanceHeroku.get<CardsResponseType>('cards/card', { params }),

  createCard: (data: CreateCardType) => instanceHeroku.post('cards/card', data),
};
