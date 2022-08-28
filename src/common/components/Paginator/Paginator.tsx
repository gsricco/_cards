import { FC } from 'react';

import { Pagination } from '@mui/material';

import { changePacksPage } from '../../../features';
import { useAppDispatch } from '../../../hooks';

type PaginatorProps = {
  pageCount: number;
  totalElements: number;
  page: number;
};

export const Paginator: FC<PaginatorProps> = ({ pageCount, totalElements, page }) => {
  const pageNumbers = Math.ceil(totalElements / pageCount);
  const dispatch = useAppDispatch();

  return (
    <Pagination
      sx={{ ml: '133px' }}
      count={pageNumbers}
      page={page}
      shape="rounded"
      size="large"
      onChange={(e, num) => dispatch(changePacksPage(num))}
      showFirstButton
      showLastButton
    />
  );
};
