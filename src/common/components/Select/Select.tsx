import { FC } from 'react';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import styles from './Select.module.scss';

import iconLogout from 'assets/images/logout.svg';
import iconProfile from 'assets/images/user.svg';
import { Path } from 'common';
import { logout } from 'features';
import { useAppDispatch } from 'hooks';

export const Select: FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onHandlerClick = (): void => {
    navigate(Path.PROFILE);
  };
  const onLogoutClick = (): void => {
    dispatch(logout());
  };

  return (
    <Paper className={styles.menuContainer}>
      <MenuList>
        <MenuItem onClick={onHandlerClick}>
          <img src={iconProfile} alt="icon" />
          Profile
        </MenuItem>
        <MenuItem onClick={onLogoutClick}>
          <img src={iconLogout} alt="logout icon" />
          Logout
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
