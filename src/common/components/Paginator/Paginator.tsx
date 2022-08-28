import { FC } from 'react';

import { Pagination } from '@mui/material';

export const Paginator: FC = () => {
  return (
    <Pagination
      sx={{ ml: '133px' }}
      count={100}
      shape="rounded"
      size="large"
      showFirstButton
      showLastButton
    />
  );
};