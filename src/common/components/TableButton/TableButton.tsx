import { FC } from 'react';

import { Icon, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { SelectMyCards } from '../Select/SelectMyCards';

import styles from './TableButton.module.scss';

import iconMenuMyPack from 'assets/images/menuMyPack.svg';
import { useShow } from 'hooks';

type Props = {
  title: string;
  nameButton: string;
  onAddClick?: () => void;
  menuMyPack?: boolean;
};
export const TableButton: FC<Props> = ({ title, nameButton, onAddClick, menuMyPack }) => {
  const { show, onButtonIconClick } = useShow();

  const onOpenModalClick = (): void => {
    if (onAddClick) {
      onAddClick();
    }
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
              {show && <SelectMyCards title={title} stylesRules={styles.customSelect} />}
            </div>
          </Icon>
        )}
      </Typography>

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
