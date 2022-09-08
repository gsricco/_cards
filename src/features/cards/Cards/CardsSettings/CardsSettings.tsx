import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from '../Cards.module.scss';

import { Modal, Path, Search, TableButton } from 'common';
import { EMPTY_STRING } from 'common/constants/constants';
import {
  addCard,
  CardsModal,
  getCards,
  getCardsPackId,
  getCardsQueryParams,
  getCardUserId,
  getId,
} from 'features';
import { useAppSelector, useAppDispatch, useModal } from 'hooks';

export const CardsSettings: FC = () => {
  const dispatch = useAppDispatch();

  const isMyPack = useAppSelector(getId) === useAppSelector(getCardUserId);
  const queryParams = useAppSelector(getCardsQueryParams);
  const cardsPack_id = useAppSelector(getCardsPackId);

  const { open, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const onAddNewCardClick = async (question: string, answer: string): Promise<void> => {
    await dispatch(addCard({ question, answer, cardsPack_id }));

    closeModal();
  };

  const onStartLearnClick = (): void => {
    navigate(`${Path.LEARN}/${cardsPack_id}`);
  };

  const packTitle = isMyPack ? (
    <div>
      <TableButton
        title="My Pack"
        nameButton="Add new card"
        onAddClick={openModal}
        menuMyPack
      />
      <CardsModal
        closeModal={closeModal}
        packTitle={Modal.ADD_NEW_CARD}
        onClick={onAddNewCardClick}
        open={open}
        name={EMPTY_STRING}
        answer={EMPTY_STRING}
      />
    </div>
  ) : (
    <TableButton
      title="Friend’s Pack"
      nameButton="Learn to pack"
      onAddClick={onStartLearnClick}
    />
  );

  return (
    <>
      {packTitle}

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
