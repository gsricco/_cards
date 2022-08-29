import { FC } from 'react';

import {
  BorderColorOutlined,
  DeleteForeverOutlined,
  SchoolOutlined,
} from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';

import styles from '../../Packs.module.scss';

import { deletePack, getId, addPacks, changePacksName } from 'features';
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

  const onCreatePackClick = (): void => {
    dispatch(addPacks());
  };

  const onPackNameChange = (): void => {
    dispatch(changePacksName(packId));
  };

  return (
    <TableRow sx={{ height: '48px' }}>
      <TableCell className={styles.tableCellBody}>{name}</TableCell>
      <TableCell className={styles.tableCellBody}>{cards}</TableCell>
      <TableCell className={styles.tableCellBody}>{updated}</TableCell>
      <TableCell className={styles.tableCellBody}>{created}</TableCell>
      <TableCell sx={{ p: '5px 16px', width: '130px' }}>
        <IconButton onClick={onCreatePackClick}>
          <SchoolOutlined />
        </IconButton>

        {packUserId === userId && (
          <IconButton onClick={onPackNameChange}>
            <BorderColorOutlined />
          </IconButton>
        )}

        {packUserId === userId && (
          <IconButton onClick={onDeletePackClick}>
            <DeleteForeverOutlined />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
