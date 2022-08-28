import { instance } from './instance';

import { PacksParamsType } from 'common';

export const packsAPI = {
  getPacks: (params: PacksParamsType) => instance.get('cards/pack', { params }),
};
