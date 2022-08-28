import { FC } from 'react';

import { TableBody } from '@mui/material';

import { Pack } from './Pack';

import { getPacks } from 'features';
import { useAppSelector } from 'hooks';

export const PacksTableBody: FC = () => {
  const packs = useAppSelector(getPacks);

  return (
    <TableBody>
      {packs.map(({ _id, name, cardsCount, updated, user_name, user_id }) => (
        <Pack
          key={`${_id}-${user_id}`}
          packId={_id}
          packUserId={user_id}
          name={name}
          cards={cardsCount}
          updated={updated.slice(0, 10)}
          created={user_name}
        />
      ))}
    </TableBody>
  );
};
