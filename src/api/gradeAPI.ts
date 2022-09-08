import { instanceHeroku } from './instance';

import { UpdateGradeResponseType, UpdateGradeDataType } from 'common';

export const gradeAPI = {
  updateGrade: (data: UpdateGradeDataType) =>
    instanceHeroku.put<UpdateGradeResponseType>('cards/grade', data),
};
