import { FC } from 'react';

import { TableBody } from '@mui/material';

import { useAppSelector } from '../../../hooks';

import { Pack } from './Pack';

import { CardsPacksType } from 'common';

export const PacksTableBody: FC = () => {
  const packs = useAppSelector<CardsPacksType[]>(state => state.packs.cardPacks);

  return (
    <TableBody>
      {packs.map(({ _id, name, cardsCount, updated, user_name }) => (
        <Pack
          key={_id}
          name={name}
          cards={cardsCount}
          updated={updated.slice(0, 10)}
          created={user_name}
        />
      ))}
    </TableBody>
  );
};
