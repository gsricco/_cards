import { ChangeEvent, FC } from 'react';

import styles from '../Packs.module.scss';

import { MenuPageCount } from 'common/components/MenuPageCount/MenuPageCount';
import { Paginator } from 'common/components/Paginator/Paginator';
import { setPacksParams } from 'features/packs/packsReducer';
import {
  getCardPacksTotalCount,
  getPackQueryParams,
  getPacksPageCount,
  getPage,
} from 'features/packs/packsSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

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
