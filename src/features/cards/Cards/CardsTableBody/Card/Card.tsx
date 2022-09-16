import { FC } from 'react';

import { IconButton, TableCell, TableRow } from '@mui/material';

import styles from '../../Cards.module.scss';

import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import { Modal } from 'common/enums/modal';
import { getId } from 'features/auth/authSelectors';
import { changeCard, deleteCard } from 'features/cards/cardsReducer';
import { getCardUserId } from 'features/cards/cardsSelectors';
import { Grade } from 'features/learn/Grade/Grade';
import { CardsModal } from 'features/modals/CardsModal/CardsModal';
import { RemoveModal } from 'features/modals/RemoveModal/RemoveModal';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { useModal } from 'hooks/useModal';

type Props = {
  question: string;
  answer: string;
  updated: string;
  grade: number;
  id: string;
};

export const Card: FC<Props> = ({ id, question, answer, updated, grade }) => {
  const dispatch = useAppDispatch();

  const packUserId = useAppSelector(getCardUserId);
  const userId = useAppSelector(getId);

  const { open, openEdit, openModal, openEditModal, closeModal, closeEditModal } =
    useModal();

  const onDeleteCardClick = async (): Promise<void> => {
    await dispatch(deleteCard(id));

    closeEditModal();
  };

  const onCardChange = async (question: string, answer: string): Promise<void> => {
    await dispatch(changeCard({ question, answer, _id: id }));

    closeModal();
  };

  return (
    <TableRow sx={{ height: '48px' }}>
      <TableCell className={styles.tableCellBody}>{question}</TableCell>
      <TableCell className={styles.tableCellBody}>{answer}</TableCell>
      <TableCell className={styles.tableCellBody}>{updated}</TableCell>
      <TableCell className={styles.tableCellBody}>
        <Grade grade={grade} />
      </TableCell>

      <TableCell>
        {packUserId === userId && (
          <IconButton>
            <div onClick={openModal} role="presentation">
              <img alt="Edit Button" src={EditIcon} />
            </div>

            <CardsModal
              packTitle={Modal.EDIT_CARD}
              onClick={onCardChange}
              open={open}
              closeModal={closeModal}
              name={question}
              answer={answer}
            />
          </IconButton>
        )}

        {packUserId === userId && (
          <IconButton>
            <div onClick={openEditModal} role="presentation">
              <img alt="Delete Button" src={DeleteICon} />
            </div>

            <RemoveModal
              title={Modal.DELETE_CARD}
              name={question}
              onClick={onDeleteCardClick}
              open={openEdit}
              closeModal={closeEditModal}
            />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
