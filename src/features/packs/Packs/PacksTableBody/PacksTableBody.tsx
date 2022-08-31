import { FC } from 'react';

import { TableBody } from '@mui/material';

import { Pack } from './Pack';

import { getCardPacks, getId } from 'features';
import { useAppSelector } from 'hooks';

export const PacksTableBody: FC = () => {
  const packs = useAppSelector(getCardPacks);
  const userId = useAppSelector(getId);

  return (
    <TableBody>
      {packs.map(({ _id, name, cardsCount, updated, user_name, user_id }) => (
        <Pack
          key={`${_id}-${user_id}`}
          packId={_id}
          isMyCard={userId === user_id}
          name={name}
          cards={cardsCount}
          updated={updated.slice(0, 10)}
          created={user_name}
        />
      ))}
    </TableBody>
  );
};
