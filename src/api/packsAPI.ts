import { instanceHeroku } from './instance';

import {
  AddPackResponseType,
  DeletePackResponseType,
  PacksParamsType,
  PacksResponseType,
  UpdatePackResponseType,
} from 'common';

export const packsAPI = {
  getPacks: (params: PacksParamsType) =>
    instanceHeroku.get<PacksResponseType>('cards/pack', { params }),

  addPack: () =>
    instanceHeroku.post<AddPackResponseType>('cards/pack', {
      cardsPack: { name: 'Pack created!' },
    }),

  updatePackName: (_id: string) =>
    instanceHeroku.put<UpdatePackResponseType>('cards/pack', {
      cardsPack: { _id, name: 'Pack changed!' },
    }),

  deletePack: (id: string) =>
    instanceHeroku.delete<DeletePackResponseType>(`cards/pack?id=${id}`),
};
