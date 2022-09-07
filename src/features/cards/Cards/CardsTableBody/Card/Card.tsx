import { FC } from 'react';

import { IconButton, TableCell, TableRow } from '@mui/material';

import styles from '../../Cards.module.scss';

import { Grade } from './Grade';

import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import { Modal } from 'common';
import {
  CardsModal,
  changeCard,
  deleteCard,
  getCardUserId,
  getId,
  RemoveModal,
} from 'features';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';

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
