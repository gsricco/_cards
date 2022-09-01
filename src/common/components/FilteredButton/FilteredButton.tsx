import { FC } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import styles from './FilteredButton.module.scss';

import { getId, setPacksParams } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const FilteredButton: FC = () => {
  const dispatch = useAppDispatch();

  const userID = useAppSelector(getId);

  const getMyPacks = (): void => {
    dispatch(setPacksParams({ user_id: userID }));
  };

  const getAllPacks = (): void => {
    dispatch(setPacksParams({ user_id: undefined }));
  };

  return (
    <ButtonGroup className={styles.filteredContainer}>
      <span>Show packs cards</span>
      <Button onClick={getMyPacks} className={styles.itemButton}>
        My
      </Button>
      <Button onClick={getAllPacks} className={styles.itemButton}>
        All
      </Button>
    </ButtonGroup>
  );
};
