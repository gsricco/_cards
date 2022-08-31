import React, { FC } from 'react';

import { Icon } from '@mui/material';
import Button from '@mui/material/Button';

import iconMenuMyPack from '../../../assets/images/menuMyPack.svg';
import { useAppDispatch, useShow } from '../../../hooks';
import { AppThunk } from '../../types';
import { Select } from '../Select';

import styles from './TableButton.module.scss';

type Props = {
  title: string;
  nameButton: string;
  onAddClick: () => AppThunk;
  menuMyPack?: boolean;
};
export const TableButton: FC<Props> = ({ title, nameButton, onAddClick, menuMyPack }) => {
  const dispatch = useAppDispatch();

  const onCreatePackClick = (): void => {
    dispatch(onAddClick());
  };
  const { show, onButtonIconClick } = useShow();

  return (
    <div className={styles.containerButton}>
      <div className={styles.titleButton}>
        {title}
        {menuMyPack && (
          <Icon onClick={onButtonIconClick}>
            <img src={iconMenuMyPack} alt="Sviat" />
          </Icon>
        )}
      </div>
      {show && <Select />}
      <Button
        className={styles.tableButton}
        variant="contained"
        onClick={onCreatePackClick}
      >
        {nameButton}
      </Button>
    </div>
  );
};
