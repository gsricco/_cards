import { DeletedCardsPack } from '../common/types/ResponseTypes';

import { instance } from './instance';

import { PacksParamsType } from 'common';

export const packsAPI = {
  getPacks: (params: PacksParamsType) => instance.get('cards/pack', { params }),
  deletePack: (id: string) => instance.delete<DeletedCardsPack>(`/cards/pack?id=${id}`),
};
