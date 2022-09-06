import { ChangeEvent, FC } from 'react';

import styles from '../Packs.module.scss';

import { MenuPageCount, Paginator } from 'common';
import {
  setPacksParams,
  getCardPacksTotalCount,
  getPackQueryParams,
  getPacksPageCount,
  getPage,
} from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const PacksFooter: FC = () => {
  const dispatch = useAppDispatch();

  const page = useAppSelector(getPage);
  const cardPacksTotalCount = useAppSelector(getCardPacksTotalCount);
  const queryParams = useAppSelector(getPackQueryParams);
  const pageCount = useAppSelector(getPacksPageCount);

  const onPageChange = (_: ChangeEvent<unknown>, page: number): void => {
    dispatch(setPacksParams({ ...queryParams, page }));
  };

  return (
    <div className={styles.pageManagement}>
      <Paginator
        pageCount={pageCount}
        totalElements={cardPacksTotalCount}
        page={page}
        setPage={onPageChange}
      />
      <MenuPageCount pageCount={pageCount} />
    </div>
  );
};
