import { FC } from 'react';

import { Icon, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import {
  changePacksName,
  deletePack,
  getCardsPackId,
  PacksModal,
  RemoveModal,
} from '../../../features';
import { Modal } from '../../enums';
import { SelectMyCards } from '../Select/SelectMyCards';

import styles from './TableButton.module.scss';

import iconMenuMyPack from 'assets/images/menuMyPack.svg';
import { useAppDispatch, useAppSelector, useModal, useShow } from 'hooks';

type Props = {
  title: string;
  nameButton: string;
  onAddClick?: () => void;
  menuMyPack?: boolean;
};
export const TableButton: FC<Props> = ({ title, nameButton, onAddClick, menuMyPack }) => {
  const { show, onButtonIconClick } = useShow();
  const { open, openEdit, closeModal, closeEditModal } = useModal();
  const dispatch = useAppDispatch();
  const packId = useAppSelector(getCardsPackId);

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
  };

  return (
    <div className={styles.containerButton}>
      <Typography
        className={styles.titleButton}
        component="div"
        onClick={onButtonIconClick}
      >
        {title}

        {menuMyPack && (
          <Icon>
            <div className={styles.wrap}>
              <img src={iconMenuMyPack} alt="Icon" />
              {show && <SelectMyCards stylesRules={styles.customSelect} />}
            </div>
          </Icon>
        )}
      </Typography>

      <PacksModal
        packTitle={Modal.EDIT_PACK}
        onClick={onPackNameChange}
        open={open}
        closeModal={closeModal}
        name={title}
      />
      <RemoveModal
        title={Modal.DELETE_PACK}
        name={title}
        onClick={onDeletePackClick}
        open={openEdit}
        closeModal={closeEditModal}
      />
      <Button
        className={styles.tableButton}
        variant="contained"
        onClick={onOpenModalClick}
      >
        {nameButton}
      </Button>
    </div>
  );
};
