import { FC } from 'react';

import { IconButton, TableCell, TableRow } from '@mui/material';

import styles from '../../Cards.module.scss';

import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import { changeCard, deleteCard, getId, getCardUserId } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

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

  const onCardNameChange = (): void => {
    dispatch(changeCard(id));
  };

  const onDeleteCardClick = (): void => {
    dispatch(deleteCard(id));
  };

  return (
    <TableRow sx={{ height: '48px' }}>
      <TableCell className={styles.tableCellBody}>{question}</TableCell>
      <TableCell className={styles.tableCellBody}>{answer}</TableCell>
      <TableCell className={styles.tableCellBody}>{updated}</TableCell>
      <TableCell className={styles.tableCellBody}>{grade}</TableCell>
      <TableCell>
        {packUserId === userId && (
          <IconButton onClick={onCardNameChange}>
            <img alt="Edit Button" src={EditIcon} />
          </IconButton>
        )}

        {packUserId === userId && (
          <IconButton onClick={onDeleteCardClick}>
            <img alt="Delete Button" src={DeleteICon} />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
