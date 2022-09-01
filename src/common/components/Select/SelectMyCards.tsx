import { FC } from 'react';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';

import styles from './Select.module.scss';

import iconDelete from 'assets/images/Delete.svg';
import iconEdit from 'assets/images/Edit.svg';
import iconLearn from 'assets/images/teacher.svg';

type SelectType = {
  stylesRules?: string;
};

export const SelectMyCards: FC<SelectType> = ({ stylesRules }) => {
  const onEditClick = (): void => {};
  const onDeleteClick = (): void => {};
  const onLearnClick = (): void => {};

  return (
    <Paper className={`${styles.menuContainer} ${stylesRules}`}>
      <MenuList>
        <MenuItem onClick={onEditClick}>
          <img src={iconEdit} alt="icon" />
          Edit
        </MenuItem>
        <MenuItem onClick={onDeleteClick}>
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
