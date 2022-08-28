import { FC } from 'react';

import {
  BorderColorOutlined,
  DeleteForeverOutlined,
  SchoolOutlined,
} from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

import styles from '../../PacksTable.module.scss';

type Props = {
  name: string;
  cards: number;
  updated: string;
  created: string;
};

export const Pack: FC<Props> = ({ name, created, updated, cards }) => {
  return (
    <TableRow sx={{ height: '48px' }}>
      <TableCell className={styles.tableCellBody}>{name}</TableCell>
      <TableCell className={styles.tableCellBody}>{cards}</TableCell>
      <TableCell className={styles.tableCellBody}>{updated}</TableCell>
      <TableCell className={styles.tableCellBody}>{created}</TableCell>
      <TableCell sx={{ p: '5px 16px', width: '130px' }}>
        <IconButton>
          <SchoolOutlined />
        </IconButton>
        <IconButton>
          <BorderColorOutlined />
        </IconButton>
        <IconButton>
          <DeleteForeverOutlined />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
