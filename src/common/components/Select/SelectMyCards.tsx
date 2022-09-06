import { FC } from 'react';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';

import {
  changePacksName,
  deletePack,
  getCardsPackId,
  PacksModal,
} from '../../../features';
import { useAppDispatch, useAppSelector, useModal } from '../../../hooks';
import { RemoveModal } from '../RemoveModal';

import styles from './Select.module.scss';

import iconDelete from 'assets/images/Delete.svg';
import iconEdit from 'assets/images/Edit.svg';
import iconLearn from 'assets/images/teacher.svg';
import { Modal } from 'common/enums';

type SelectType = {
  stylesRules?: string;
  title: string;
};

export const SelectMyCards: FC<SelectType> = ({ stylesRules, title }) => {
  const dispatch = useAppDispatch();
  const packId = useAppSelector(getCardsPackId);

  const { open, openEdit, openModal, openEditModal, closeModal, closeEditModal } =
    useModal();

  const onPackNameChange = async (name: string): Promise<void> => {
    await dispatch(changePacksName({ _id: packId, name }));

    closeModal();
  };
  const onDeletePackClick = async (): Promise<void> => {
    await dispatch(deletePack(packId));

    closeEditModal();
  };
  const onLearnClick = (): void => {};

  return (
    <>
      <Paper className={`${styles.menuContainer} ${stylesRules}`}>
        <MenuList>
          <MenuItem>
            <div onClick={openModal} role="presentation">
              <img src={iconEdit} alt="icon" />
            </div>
            <PacksModal
              packTitle={Modal.EDIT_PACK}
              onClick={onPackNameChange}
              open={open}
              closeModal={closeModal}
              name={title}
            />
            Edit
          </MenuItem>
          <MenuItem onClick={openEditModal}>
            <img src={iconDelete} alt="logout icon" />
            Delete
          </MenuItem>
          <MenuItem onClick={onLearnClick}>
            <img src={iconLearn} alt="Learn icon" />
            Learn
          </MenuItem>
        </MenuList>
      </Paper>

      <RemoveModal
        title={Modal.DELETE_PACK}
        name={title}
        onClick={onDeletePackClick}
        open={openEdit}
        closeModal={closeEditModal}
      />
    </>
  );
};
