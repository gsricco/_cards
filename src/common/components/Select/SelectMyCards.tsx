import { FC } from 'react';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';

import { useModal } from '../../../hooks';

import styles from './Select.module.scss';

import iconDelete from 'assets/images/Delete.svg';
import iconEdit from 'assets/images/Edit.svg';
import iconLearn from 'assets/images/teacher.svg';

type SelectType = {
  stylesRules?: string;
};

export const SelectMyCards: FC<SelectType> = ({ stylesRules }) => {
  const { openModal, openEditModal } = useModal();

  const onLearnClick = (): void => {};

  return (
    <Paper className={`${styles.menuContainer} ${stylesRules}`}>
      <MenuList>
        <MenuItem onClick={openModal}>
          <div role="presentation">
            <img src={iconEdit} alt="icon" />
          </div>
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
  );
};
