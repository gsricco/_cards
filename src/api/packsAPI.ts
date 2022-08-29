import { AddPackResponseType } from '../common/types/ResponseTypes';

import { instance } from './instance';

import { DeletePackResponseType, PacksParamsType, PacksResponseType } from 'common';

export const packsAPI = {
  getPacks: (params: PacksParamsType) =>
    instance.get<PacksResponseType>('cards/pack', { params }),

  addPack: () =>
    instance.post<AddPackResponseType>('cards/pack', { cardsPack: { name: 'New Pack' } }),

  deletePack: (id: string) =>
    instance.delete<DeletePackResponseType>(`/cards/pack?id=${id}`),
};
