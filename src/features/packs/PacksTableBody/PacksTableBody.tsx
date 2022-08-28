import { FC } from 'react';

import { TableBody } from '@mui/material';

import { getPacks } from '../packs-selectors';

import { Pack } from './Pack';

import { useAppSelector } from 'hooks';

export const PacksTableBody: FC = () => {
  const packs = useAppSelector(getPacks);

  return (
    <TableBody>
      {packs.map(({ _id, name, cardsCount, updated, user_name }) => (
        <Pack
          key={_id}
          id={_id}
          name={name}
          cards={cardsCount}
          updated={updated.slice(0, 10)}
          created={user_name}
        />
      ))}
    </TableBody>
  );
};
