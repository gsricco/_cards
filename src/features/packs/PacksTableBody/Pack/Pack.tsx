import { FC } from 'react';

import {
  BorderColorOutlined,
  DeleteForeverOutlined,
  SchoolOutlined,
} from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

import { addPacks } from '../../packs-reducer';
import styles from '../../PacksTable.module.scss';

import { deletePack } from 'features';
import { useAppDispatch } from 'hooks';

type Props = {
  id: string;
  name: string;
  cards: number;
  updated: string;
  created: string;
};

export const Pack: FC<Props> = ({ id, name, created, updated, cards }) => {
  const dispatch = useAppDispatch();

  const deletedPackHandler = (): void => {
    dispatch(deletePack(id));
  };

  return (
    <TableRow sx={{ height: '48px' }}>
      <TableCell className={styles.tableCellBody}>{name}</TableCell>
      <TableCell className={styles.tableCellBody}>{cards}</TableCell>
      <TableCell className={styles.tableCellBody}>{updated}</TableCell>
      <TableCell className={styles.tableCellBody}>{created}</TableCell>
      <TableCell sx={{ p: '5px 16px', width: '130px' }}>
        <IconButton
          onClick={() => {
            dispatch(addPacks());
          }}
        >
          <SchoolOutlined />
        </IconButton>
        <IconButton>
          <BorderColorOutlined />
        </IconButton>
        <IconButton onClick={deletedPackHandler}>
          <DeleteForeverOutlined />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
