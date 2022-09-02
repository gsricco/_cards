import { FC } from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';

import { Card } from './Card';

import { getPackCards } from 'features';
import { useAppSelector } from 'hooks';

export const CardsTableBody: FC = () => {
  const cards = useAppSelector(getPackCards);

  if (cards.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell rowSpan={3} />
          <TableCell align="right">
            <h3>Nothing found for your request</h3>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

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
    </TableBody>
  );
};
