import { ChangeEvent, FC } from 'react';

import { Pagination } from '@mui/material';

import { changePacksPage } from 'features';
import { useAppDispatch } from 'hooks';

type PaginatorProps = {
  pageCount: number;
  totalElements: number;
  page: number;
};

export const Paginator: FC<PaginatorProps> = ({ pageCount, totalElements, page }) => {
  const pageNumbers = Math.ceil(totalElements / pageCount);
  const dispatch = useAppDispatch();

  const onPageChange = (_: ChangeEvent<unknown>, currentPage: number): void => {
    dispatch(changePacksPage(currentPage));
  };

  return (
    <Pagination
      sx={{ ml: '133px' }}
      count={pageNumbers}
      page={page}
      shape="rounded"
      size="large"
      onChange={onPageChange}
      showFirstButton
      showLastButton
    />
  );
};
