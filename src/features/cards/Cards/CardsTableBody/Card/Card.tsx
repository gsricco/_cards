import React, { FC } from 'react';

import { TableCell, TableRow } from '@mui/material';

import styles from '../../Cards.module.scss';

type Props = {
  question: string;
  answer: string;
  updated: string;
  grade: number;
};

export const Card: FC<Props> = ({ question, answer, updated, grade }) => {
  return (
    <TableRow sx={{ height: '48px' }}>
      <TableCell className={styles.tableCellBody}>{question}</TableCell>
      <TableCell className={styles.tableCellBody}>{answer}</TableCell>
      <TableCell className={styles.tableCellBody}>{updated}</TableCell>
      <TableCell className={styles.tableCellBody}>{grade}</TableCell>
    </TableRow>
  );
};
