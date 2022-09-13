import { FC } from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';

import { Pack } from './Pack';

import { getCardPacks, getId } from 'features';
import { useAppSelector } from 'hooks';

export const PacksTableBody: FC = () => {
  const packs = useAppSelector(getCardPacks);

  const userId = useAppSelector(getId);

  if (packs.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell rowSpan={3} />
          <TableCell rowSpan={3} />
          <TableCell>
            <h3>Nothing found for your request</h3>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {packs.map(({ _id, name, cardsCount, updated, user_name, user_id, deckCover }) => (
        <Pack
          key={`${_id}-${user_id}`}
          packId={_id}
          isMyCard={userId === user_id}
          name={name}
          cards={cardsCount}
          updated={updated.slice(0, 10)}
          created={user_name}
          deckCover={deckCover}
        />
      ))}
    </TableBody>
  );
};
