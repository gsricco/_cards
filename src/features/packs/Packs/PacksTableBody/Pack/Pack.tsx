import { FC } from 'react';

import { IconButton, TableCell, TableRow } from '@mui/material';

import styles from '../../Packs.module.scss';

import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import TeacherIcon from 'assets/images/teacher.svg';
import { changePacksName, deletePack, getId } from 'features';
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
        <IconButton>
          <img alt="Teacher Button" src={TeacherIcon} />
        </IconButton>

        {packUserId === userId && (
          <IconButton onClick={onPackNameChange}>
            <img alt="Teacher Button" src={EditIcon} />
          </IconButton>
        )}

        {packUserId === userId && (
          <IconButton onClick={onDeletePackClick}>
            <img alt="Teacher Button" src={DeleteICon} />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
