import { instanceHeroku } from './instance';

import {
  AddCardsPackType,
  AddPackResponseType,
  DeletePackResponseType,
  PacksParamsType,
  PacksResponseType,
  UpdatePackResponseType,
} from 'common';
import { UpdatePackType } from 'common/types/DataTypes';

export const packsAPI = {
  getPacks: (params: PacksParamsType) =>
    instanceHeroku.get<PacksResponseType>('cards/pack', { params }),

  addPack: (cardsPack: AddCardsPackType) =>
    instanceHeroku.post<AddPackResponseType>('cards/pack', { cardsPack }),

  updatePackName: (cardsPack: UpdatePackType) =>
    instanceHeroku.put<UpdatePackResponseType>('cards/pack', { cardsPack }),

  deletePack: (id: string) =>
    instanceHeroku.delete<DeletePackResponseType>(`cards/pack?id=${id}`),
};
