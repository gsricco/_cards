import { instance } from './instance';

import { PacksParamsType, PacksResponseType, DeletePackResponseType } from 'common';

export const packsAPI = {
  getPacks: (params: PacksParamsType) =>
    instance.get<PacksResponseType>('cards/pack', { params }),

  deletePack: (id: string) =>
    instance.delete<DeletePackResponseType>(`/cards/pack?id=${id}`),
};
