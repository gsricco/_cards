import React, { FC } from 'react';

import { TableBody } from '@mui/material';

import { getPackCards } from '../../cards-selectors';

import { Card } from './Card';

import { useAppSelector } from 'hooks';

export const CardsTableBody: FC = () => {
  const cards = useAppSelector(getPackCards);

  return (
    <TableBody>
      {cards.map(({ _id, question, updated, user_id, answer, grade }) => (
        <Card
          key={`${_id}-${user_id}`}
          question={question}
          answer={answer}
          updated={updated.slice(0, 10)}
          grade={grade}
        />
      ))}
    </TableBody>
  );
};
