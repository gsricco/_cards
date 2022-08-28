import { instance } from './instance';

import { PacksParamsType, DeletePackResponseType, PacksResponseType } from 'common';

export const packsAPI = {
  getPacks: (params: PacksParamsType) =>
    instance.get<PacksResponseType>('cards/pack', { params }),

  deletePack: (id: string) =>
    instance.delete<DeletePackResponseType>(`/cards/pack?id=${id}`),
};
