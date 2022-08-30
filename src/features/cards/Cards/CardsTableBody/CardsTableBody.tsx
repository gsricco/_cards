import React, { FC } from 'react';

import { TableBody } from '@mui/material';

import { addCard } from '../../cards-reducer';

import { Card } from './Card';

import { getPackCards } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const CardsTableBody: FC = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector(getPackCards);

  const onCreateCardClick = (): void => {
    dispatch(addCard());
  };

  return (
    <TableBody>
      {cards.map(({ _id, question, updated, user_id, answer, grade }) => (
        <Card
          key={`${_id}-${user_id}`}
          id={_id}
          question={question}
          answer={answer}
          updated={updated.slice(0, 10)}
          grade={grade}
        />
      ))}
      <button type="submit" onClick={onCreateCardClick}>
        add card
      </button>
    </TableBody>
  );
};
