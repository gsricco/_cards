import { FC } from 'react';

import { IconButton, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from '../../Packs.module.scss';

import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import TeacherIcon from 'assets/images/teacher.svg';
import { Path } from 'common';
import { changePacksName, deletePack, setCardsParams } from 'features';
import { useAppDispatch } from 'hooks';

type Props = {
  packId: string;
  name: string;
  cards: number;
  updated: string;
  created: string;
  isMyCard: boolean;
};

export const Pack: FC<Props> = ({ packId, name, created, updated, cards, isMyCard }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onGetCards = (): void => {
    dispatch(setCardsParams({ cardsPack_id: packId }));

    navigate(Path.CARDS);
  };

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
        <IconButton onClick={onGetCards} className={styles.teachIcon}>
          <img alt="Teacher Button" src={TeacherIcon} />
        </IconButton>

        {isMyCard && (
          <IconButton onClick={onPackNameChange}>
            <img alt="Edit Button" src={EditIcon} />
          </IconButton>
        )}

        {isMyCard && (
          <IconButton onClick={onDeletePackClick}>
            <img alt="Delete Button" src={DeleteICon} />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
