import { FC } from 'react';

import { IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import styles from './TableButton.module.scss';

import { getStatus } from 'app';
import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import TeacherIcon from 'assets/images/teacher.svg';
import { Modal, Path, RequestStatus } from 'common';
import {
  changePacksName,
  deletePack,
  getCardsPackId,
  getPackCards,
  PacksModal,
  RemoveModal,
} from 'features';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';

type Props = {
  title: string | undefined;
  nameButton: string;
  onAddClick?: () => void;
  menuMyPack?: boolean;
};

export const TableButton: FC<Props> = ({ title, nameButton, onAddClick, menuMyPack }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const cards = useAppSelector(getPackCards);
  const status = useAppSelector(getStatus);
  const packId = useAppSelector(getCardsPackId);

  const { open, openEdit, openModal, openEditModal, closeModal, closeEditModal } =
    useModal();

  const onOpenModalClick = (): void => {
    if (onAddClick) {
      onAddClick();
    }
  };
  const onPackNameChange = async (name: string): Promise<void> => {
    await dispatch(changePacksName({ _id: packId, name }));

    closeModal();
  };

  const onDeletePackClick = async (): Promise<void> => {
    await dispatch(deletePack(packId));

    closeEditModal();
    navigate(Path.PACKS);
  };

  const onStartLearnClick = (): void => {
    navigate(`${Path.LEARN}/${packId}`);
  };

  return (
    <div className={styles.containerButton}>
      <Typography className={styles.titleButton} component="div">
        {title}

        {menuMyPack && (
          <div className={styles.wrap}>
            <IconButton
              onClick={onStartLearnClick}
              className={styles.teachIcon}
              disabled={cards.length === 0 || status === RequestStatus.LOADING}
            >
              <img alt="Teacher Button" src={TeacherIcon} />
            </IconButton>
            <IconButton
              className={styles.EditIcon}
              disabled={status === RequestStatus.LOADING}
            >
              <div onClick={openModal} role="presentation">
                <img alt="Edit Button" src={EditIcon} />
              </div>

              <PacksModal
                packTitle={Modal.EDIT_PACK}
                onClick={onPackNameChange}
                open={open}
                closeModal={closeModal}
                name={title}
              />
            </IconButton>
            <IconButton
              className={styles.DeleteICon}
              disabled={status === RequestStatus.LOADING}
            >
              <div onClick={openEditModal} role="presentation">
                <img alt="Delete Button" src={DeleteICon} />
              </div>

              <RemoveModal
                title={Modal.DELETE_PACK}
                name={title}
                onClick={onDeletePackClick}
                open={openEdit}
                closeModal={closeEditModal}
              />
            </IconButton>
          </div>
        )}
      </Typography>

      <Button
        className={styles.tableButton}
        variant="contained"
        onClick={onOpenModalClick}
        disabled={status === RequestStatus.LOADING}
      >
        {nameButton}
      </Button>
    </div>
  );
};
