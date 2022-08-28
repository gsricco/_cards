import { FC } from 'react';

import { Pagination } from '@mui/material';

type PaginatorProps = {
  pageCount: number;
  totalElements: number;
};

export const Paginator: FC<PaginatorProps> = ({ pageCount, totalElements }) => {
  const pageNumbers = Math.ceil(totalElements / pageCount);

  return (
    <Pagination
      sx={{ ml: '133px' }}
      count={pageNumbers}
      page={3}
      shape="rounded"
      size="large"
      onChange={(_, num) => {
        console.log(num, totalElements);
      }}
      showFirstButton
      showLastButton
    />
  );
};
