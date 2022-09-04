import React, { FC, useState } from 'react';

import { IconButton, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { CustomModal } from '../../../../../common/components';
import { PacksModals } from '../../../../modals/PacksModals/PacksModals';
import styles from '../../Packs.module.scss';

import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import TeacherIcon from 'assets/images/teacher.svg';
import { Path } from 'common';
import { changePacksName, getCardsQueryParams, setCardsParams } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

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
  const [activeModal, setActiveModal] = useState(false);
  const [activeModal1, setActiveModal1] = useState(false);

  const navigate = useNavigate();
  const queryParams = useAppSelector(getCardsQueryParams);

  const onGetCards = (): void => {
    dispatch(setCardsParams({ ...queryParams, cardsPack_id: packId, pageCount: 5 }));

    navigate(Path.CARDS);
  };

  const onDeletePackClick = (): void => {
    setActiveModal(!activeModal);

    // dispatch(deletePack(packId));
  };
  const onEditPackClick = (): void => {
    setActiveModal1(!activeModal1);
  };

  const onPackNameChange = (): void => {
    dispatch(changePacksName(packId));
  };

  return (
    <TableRow sx={{ height: '48px' }}>
      <TableCell className={styles.tableFirstCellBody} onClick={onEditPackClick}>
        {name}
      </TableCell>
      <TableCell className={styles.tableSecondCellBody}>{cards}</TableCell>
      <TableCell className={styles.tableThirdCellBody}>{updated}</TableCell>
      <TableCell className={styles.tableFourthCellBody}>{created}</TableCell>
      <TableCell sx={{ p: '5px 16px', width: '130px' }}>
        <IconButton
          onClick={onGetCards}
          className={styles.teachIcon}
          disabled={cards === 0 && !isMyCard}
        >
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
        {activeModal && (
          <CustomModal>
            <PacksModals nameModalsPack="Delete Pack" titlePack={name} />
          </CustomModal>
        )}
        {activeModal1 && (
          <CustomModal>
            <PacksModals nameModalsPack="Edit Pack" titlePack={name} />
          </CustomModal>
        )}
      </TableCell>
    </TableRow>
  );
};
