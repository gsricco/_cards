import { FC } from 'react';

import styles from '../Cards.module.scss';

import { Modal, Search, TableButton } from 'common';
import {
  getCards,
  CardsModal,
  getId,
  getCardUserId,
  getCardsQueryParams,
  addCard,
  getCardsPackId,
} from 'features';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';

export const CardsSettings: FC = () => {
  const dispatch = useAppDispatch();

  const isMyPack = useAppSelector(getId) === useAppSelector(getCardUserId);
  const queryParams = useAppSelector(getCardsQueryParams);
  const cardsPack_id = useAppSelector(getCardsPackId);

  const { open, openModal, closeModal } = useModal();

  const onAddNewCardClick = async (question: string, answer: string): Promise<void> => {
    await dispatch(addCard({ question, answer, cardsPack_id }));

    closeModal();
  };

  const packTitle = isMyPack ? (
    <TableButton
      title="My Pack"
      nameButton="Add new card"
      onAddClick={openModal}
      menuMyPack
    />
  ) : (
    <TableButton
      title="Friend’s Pack"
      nameButton="Learn to pack"
      onAddClick={openModal}
    />
  );

  return (
    <>
      <div>
        {packTitle}

        <CardsModal
          closeModal={closeModal}
          packTitle={Modal.ADD_NEW_CARD}
          onClick={onAddNewCardClick}
          open={open}
        />
      </div>

      <div className={styles.interaction}>
        <Search
          width="100%"
          getData={getCards}
          queryParams={queryParams}
          searchParam="cardQuestion"
        />
      </div>
    </>
  );
};
