import { FC } from 'react';

import {
  BorderColorOutlined,
  DeleteForeverOutlined,
  SchoolOutlined,
} from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

import styles from '../../Packs.module.scss';

import { getId, deletePack } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

type Props = {
  packId: string;
  name: string;
  cards: number;
  updated: string;
  created: string;
  packUserId: string;
};

export const Pack: FC<Props> = ({
  packId,
  name,
  created,
  updated,
  cards,
  packUserId,
}) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(getId);

  const onDeletePackClick = (): void => {
    dispatch(deletePack(packId));
  };

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

        {packUserId === userId && (
          <IconButton>
            <BorderColorOutlined />
          </IconButton>
        )}

        {packUserId === userId && (
          <IconButton>
            <DeleteForeverOutlined onClick={onDeletePackClick} />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
