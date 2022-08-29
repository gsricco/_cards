import { instance } from './instance';

import {
  DeletePackResponseType,
  PacksParamsType,
  PacksResponseType,
  AddPackResponseType,
  UpdatePackResponseType,
} from 'common';

export const packsAPI = {
  getPacks: (params: PacksParamsType) =>
    instance.get<PacksResponseType>('cards/pack', { params }),

  addPack: () =>
    instance.post<AddPackResponseType>('cards/pack', {
      cardsPack: { name: 'Pack created!' },
    }),

  updatePackName: (_id: string) =>
    instance.put<UpdatePackResponseType>('cards/pack', {
      cardsPack: { _id, name: 'Pack changed!' },
    }),

  deletePack: (id: string) =>
    instance.delete<DeletePackResponseType>(`cards/pack?id=${id}`),
};
