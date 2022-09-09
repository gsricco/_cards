import { FC } from 'react';

import { IconButton, TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from '../../Packs.module.scss';

import { getStatus } from 'app';
import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import TeacherIcon from 'assets/images/teacher.svg';
import { Modal, Path, RequestStatus } from 'common';
import {
  changePacksName,
  deletePack,
  getCards,
  getCardsQueryParams,
  PacksModal,
  RemoveModal,
  setCardsParams,
} from 'features';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';

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

  const queryParams = useAppSelector(getCardsQueryParams);
  const status = useAppSelector(getStatus);
  const navigate = useNavigate();

  const { open, openEdit, openModal, openEditModal, closeModal, closeEditModal } =
    useModal();

  const onGetCards = (): void => {
    dispatch(
      setCardsParams({
        ...queryParams,
        cardsPack_id: packId,
        pageCount: 5,
      }),
    );
    navigate(`${Path.CARDS}/${packId}`);
  };

  const onPackNameChange = async (name: string): Promise<void> => {
    await dispatch(changePacksName({ _id: packId, name }));

    closeModal();
  };

  const onDeletePackClick = async (): Promise<void> => {
    await dispatch(deletePack(packId));

    closeEditModal();
  };

  const onStartLearnClick = async (): Promise<void> => {
    dispatch(
      setCardsParams({
        ...queryParams,
        cardsPack_id: packId,
        pageCount: 22,
      }),
    );

    await dispatch(getCards());
    navigate(`${Path.LEARN}/${packId}`);
  };

  return (
    <TableRow sx={{ height: '48px' }}>
      <TableCell className={styles.tableFirstCellBody}>
        <div onClick={onGetCards} role="presentation">
          {name}
        </div>
      </TableCell>

      <TableCell className={styles.tableSecondCellBody}>{cards}</TableCell>
      <TableCell className={styles.tableThirdCellBody}>{updated}</TableCell>
      <TableCell className={styles.tableFourthCellBody}>{created}</TableCell>

      <TableCell sx={{ p: '5px 16px', width: '130px' }}>
        <IconButton
          onClick={onStartLearnClick}
          className={styles.teachIcon}
          disabled={(cards === 0 && !isMyCard) || status === RequestStatus.LOADING}
        >
          <img alt="Teacher Button" src={TeacherIcon} />
        </IconButton>

        {isMyCard && (
          <IconButton
            disabled={status === RequestStatus.LOADING}
            className={styles.editIcon}
          >
            <div onClick={openModal} role="presentation">
              <img alt="Edit Button" src={EditIcon} />
            </div>

            <PacksModal
              packTitle={Modal.EDIT_PACK}
              onClick={onPackNameChange}
              open={open}
              closeModal={closeModal}
              name={name}
            />
          </IconButton>
        )}

        {isMyCard && (
          <IconButton
            disabled={status === RequestStatus.LOADING}
            className={styles.deleteICon}
          >
            <div onClick={openEditModal} role="presentation">
              <img alt="Delete Button" src={DeleteICon} />
            </div>

            <RemoveModal
              title={Modal.DELETE_PACK}
              name={name}
              onClick={onDeletePackClick}
              open={openEdit}
              closeModal={closeEditModal}
            />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
};
