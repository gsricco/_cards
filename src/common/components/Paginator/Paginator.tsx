import { ChangeEvent, FC } from 'react';

import { Pagination } from '@mui/material';

type PaginatorProps = {
  pageCount: number;
  totalElements: number;
  page: number;
  setPage: (_: ChangeEvent<unknown>, currentPage: number) => void;
};

export const Paginator: FC<PaginatorProps> = ({
  pageCount,
  totalElements,
  page,
  setPage,
}) => {
  const pageNumbers = Math.ceil(totalElements / pageCount);

  return (
    <Pagination
      sx={{ ml: '133px' }}
      count={pageNumbers}
      page={page}
      shape="rounded"
      size="large"
      onChange={setPage}
      showFirstButton
      showLastButton
    />
  );
};
