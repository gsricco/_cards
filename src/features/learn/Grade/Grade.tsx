import { FC } from 'react';

import { Rating, Stack } from '@mui/material';

type Props = {
  grade: number;
};

export const Grade: FC<Props> = ({ grade }) => {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={grade} precision={0.1} readOnly />
    </Stack>
  );
};
