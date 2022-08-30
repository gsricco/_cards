import React, { FC } from 'react';

import Button from '@mui/material/Button';

import { useAppDispatch } from '../../../hooks';
import { AppThunk } from '../../types';

import styles from './TableButton.module.scss';

type Props = {
  title: string;
  nameButton: string;
  onAddClick: () => AppThunk;
};
export const TableButton: FC<Props> = ({ title, nameButton, onAddClick }) => {
  const dispatch = useAppDispatch();

  const onCreatePackClick = (): void => {
    dispatch(onAddClick());
  };

  return (
    <div className={styles.containerButton}>
      <div className={styles.titleButton}>{title}</div>
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
