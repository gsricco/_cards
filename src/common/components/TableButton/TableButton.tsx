import { FC } from 'react';

import { Icon } from '@mui/material';
import Button from '@mui/material/Button';

import { Select } from '../Select';

import styles from './TableButton.module.scss';

import iconMenuMyPack from 'assets/images/menuMyPack.svg';
import { useShow } from 'hooks';

type Props = {
  title: string;
  nameButton: string;
  onAddClick: () => void;
  menuMyPack?: boolean;
};
export const TableButton: FC<Props> = ({ title, nameButton, onAddClick, menuMyPack }) => {
  const onCreatePackClick = (): void => {
    onAddClick();
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
