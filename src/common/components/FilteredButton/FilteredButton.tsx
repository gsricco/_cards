import { FC, useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import styles from './FilteredButton.module.scss';

import { getId, setPacksParams } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const FilteredButton: FC = () => {
  const dispatch = useAppDispatch();

  const userID = useAppSelector(getId);
  const [value, setValue] = useState(false);

  const getMyPacks = (): void => {
    dispatch(setPacksParams({ user_id: userID }));
    setValue(true);
  };

  const getAllPacks = (): void => {
    dispatch(setPacksParams({ user_id: undefined }));
    setValue(false);
  };

  return (
    <ButtonGroup className={styles.filteredContainer}>
      <span>Show packs cards</span>
      <Button
        onClick={getMyPacks}
        className={`${styles.itemButton} ${value ? styles.active : ''}`}
      >
        My
      </Button>
      <Button
        onClick={getAllPacks}
        className={`${styles.itemButton} ${!value ? styles.active : ''}`}
      >
        All
      </Button>
    </ButtonGroup>
  );
};
