import { UpdateGradeResponseType } from '../common/types/ResponseTypes';

import { instanceHeroku } from './instance';

import { UpdateGradeDataType } from 'common/types/DataTypes';

export const gradeAPI = {
  updateGrade: (data: UpdateGradeDataType) =>
    instanceHeroku.put<UpdateGradeResponseType>('cards/grade', data),
};
