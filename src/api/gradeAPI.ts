import { instance } from './instance';

import { UpdateGradeResponseType, UpdateGradeDataType } from 'common';

export const gradeAPI = {
  updateGrade: (data: UpdateGradeDataType) =>
    instance.put<UpdateGradeResponseType>('cards/grade', data),
};
