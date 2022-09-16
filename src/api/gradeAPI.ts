import { instance } from './instance/instance';

import { UpdateGradeDataType } from 'common/types/DataTypes';
import { UpdateGradeResponseType } from 'common/types/ResponseTypes';

export const gradeAPI = {
  updateGrade: (data: UpdateGradeDataType) =>
    instance.put<UpdateGradeResponseType>('cards/grade', data),
};
