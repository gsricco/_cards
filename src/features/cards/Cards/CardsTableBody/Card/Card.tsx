import { FC } from 'react';

import { BorderColorOutlined, DeleteForeverOutlined } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

import styles from '../../Cards.module.scss';

import { changeCard, deleteCard } from 'features';
import { useAppDispatch } from 'hooks';

type Props = {
  question: string;
  answer: string;
  updated: string;
  grade: number;
  id: string;
};

export const Card: FC<Props> = ({ id, question, answer, updated, grade }) => {
  const dispatch = useAppDispatch();

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
        <IconButton onClick={onCardNameChange}>
          <BorderColorOutlined />
        </IconButton>
        <IconButton onClick={onDeleteCardClick}>
          <DeleteForeverOutlined />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
