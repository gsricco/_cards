import React, { FC } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import styles from './FilteredButton.module.scss';

export const FilteredButton: FC = () => {
  return (
    <ButtonGroup className={styles.filteredContainer}>
      <span>Show packs cards</span>
      <Button className={styles.itemButton}>My</Button>
      <Button className={styles.itemButton}>All</Button>
    </ButtonGroup>
  );
};
