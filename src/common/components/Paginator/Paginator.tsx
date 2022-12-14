import { ChangeEvent, FC } from 'react';

import { Pagination } from '@mui/material';

import { getStatus } from 'app/appSelectors';
import { RequestStatus } from 'common/enums/requestStatus';
import { useAppSelector } from 'hooks/redux-hooks';

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
  const status = useAppSelector(getStatus);

  const pageNumbers = Math.ceil(totalElements / pageCount);

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
