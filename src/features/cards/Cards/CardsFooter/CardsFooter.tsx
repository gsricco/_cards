import { ChangeEvent, FC } from 'react';

import { Paginator } from 'common/components/Paginator/Paginator';
import { setCardsParams } from 'features/cards/cardsReducer';
import {
  getCardsPackId,
  getCardsPage,
  getCardsPageCount,
  getCardsQueryParams,
  getCardsTotalCount,
} from 'features/cards/cardsSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

export const CardsFooter: FC = () => {
  const dispatch = useAppDispatch();

  const page = useAppSelector(getCardsPage);
  const cardTotalCount = useAppSelector(getCardsTotalCount);
  const pageCount = useAppSelector(getCardsPageCount);
  const queryParams = useAppSelector(getCardsQueryParams);
  const cardsPack_id = useAppSelector(getCardsPackId);

  const onPageChange = (_: ChangeEvent<unknown>, page: number): void => {
    dispatch(setCardsParams({ ...queryParams, page, cardsPack_id }));
  };

  return (
    <div style={{ display: 'flex', paddingBottom: '20px' }}>
      <Paginator
        pageCount={pageCount}
        totalElements={cardTotalCount}
        page={page}
        setPage={onPageChange}
      />
    </div>
  );
};
