import { ChangeEvent, FC } from 'react';

import { Pagination } from '@mui/material';

import { getStatus } from 'app';
import { RequestStatus } from 'common';
import { useAppSelector } from 'hooks';

type PaginatorProps = {
  pageCount: number;
  totalElements: number;
  page?: number;
  setPage: (_: ChangeEvent<unknown>, currentPage: number) => void;
};

export const Paginator: FC<PaginatorProps> = ({
  pageCount,
  totalElements,
  page,
  setPage,
}) => {
  const pageNumbers = Math.ceil(totalElements / pageCount);
  const status = useAppSelector(getStatus);

  return (
    <Pagination
      sx={{ mt: '40px' }}
      color="primary"
      count={pageNumbers || 0}
      page={page}
      shape="rounded"
      size="medium"
      onChange={setPage}
      showFirstButton
      showLastButton
      disabled={status === RequestStatus.LOADING}
    />
  );
};
