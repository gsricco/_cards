import { instance } from './instance/instance';

import {
  AddCardsPackType,
  PacksParamsType,
  UpdatePackType,
} from 'common/types/DataTypes';
import {
  AddPackResponseType,
  DeletePackResponseType,
  PacksResponseType,
  UpdatePackResponseType,
} from 'common/types/ResponseTypes';

export const packsAPI = {
  getPacks: (params: PacksParamsType) =>
    instance.get<PacksResponseType>('cards/pack', { params }),

  addPack: (cardsPack: AddCardsPackType) =>
    instance.post<AddPackResponseType>('cards/pack', { cardsPack }),

  updatePackName: (cardsPack: UpdatePackType) =>
    instance.put<UpdatePackResponseType>('cards/pack', { cardsPack }),

  deletePack: (id: string) =>
    instance.delete<DeletePackResponseType>(`cards/pack?id=${id}`),
};
