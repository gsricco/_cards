import { FC } from 'react';

import { TableBody } from '@mui/material';

import { Pack } from './Pack';

export const PacksTableBody: FC = () => {
  const packs = [
    { id: '1', name: 'Pack Name', cards: '1', updated: '18.03.2022', created: 'Dev2' },
    { id: '2', name: 'Name', cards: '4', updated: '12.03.2022', created: 'Dev2' },
    { id: '3', name: 'english', cards: '2', updated: '18.03.2021', created: 'Dev2' },
    { id: '4', name: 'Pack 1', cards: '23', updated: '18.04.2022', created: 'Dev2' },
    { id: '5', name: 'dfdsf', cards: '12', updated: '18.03.2022', created: 'Dev2' },
    { id: '6', name: 'JS', cards: '2', updated: '18.03.2021', created: 'Dev2' },
    { id: '7', name: 'Pack 2', cards: '23', updated: '18.04.2022', created: 'Dev2' },
    { id: '8', name: 'React', cards: '12', updated: '18.03.2022', created: 'Dev2' },
  ];

  return (
    <TableBody>
      {packs.map(({ id, name, cards, updated, created }) => (
        <Pack key={id} name={name} cards={cards} updated={updated} created={created} />
      ))}
    </TableBody>
  );
};
