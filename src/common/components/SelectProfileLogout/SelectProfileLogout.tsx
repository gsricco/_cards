import React, { FC } from 'react';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import iconLogout from '../../../assets/images/logout.svg';
import iconProfile from '../../../assets/images/user.svg';
import { logout } from '../../../features';
import { useAppDispatch } from '../../../hooks';
import { Path } from '../../enums';

import styles from './SelectProfileLogout.module.scss';

type Props = {
  closeNav: (menu: boolean) => void;
};

export const SelectProfileLogout: FC<Props> = ({ closeNav }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandlerClick = (): void => {
    navigate(Path.PROFILE);
    closeNav(false);
  };
  const onLogoutClick = (): void => {
    dispatch(logout());
    closeNav(false);
  };

  return (
    <Paper className={styles.menuContainer}>
      <MenuList>
        <MenuItem onClick={onHandlerClick}>
          <img src={iconProfile} alt="Sviat" />
          Profile
        </MenuItem>
        <MenuItem onClick={onLogoutClick}>
          <img src={iconLogout} alt="Sviat" />
          Logout
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
