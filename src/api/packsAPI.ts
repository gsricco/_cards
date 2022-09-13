import { instance } from './instance';

import {
  AddCardsPackType,
  AddPackResponseType,
  DeletePackResponseType,
  PacksParamsType,
  PacksResponseType,
  UpdatePackResponseType,
  UpdatePackType,
} from 'common';

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
