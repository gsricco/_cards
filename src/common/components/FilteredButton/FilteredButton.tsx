import { FC, useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import styles from './FilteredButton.module.scss';

import { getStatus } from 'app/appSelectors';
import { RequestStatus } from 'common/enums/requestStatus';
import { getId } from 'features/auth/authSelectors';
import { setPacksParams } from 'features/packs/packsReducer';
import { getPackQueryParams } from 'features/packs/packsSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

export const FilteredButton: FC = () => {
  const dispatch = useAppDispatch();

  const packsQueryParams = useAppSelector(getPackQueryParams);
  const user_id = useAppSelector(getId);
  const status = useAppSelector(getStatus);

  const [value, setValue] = useState(false);

  const getMyPacks = (): void => {
    dispatch(setPacksParams({ ...packsQueryParams, user_id }));
    setValue(true);
  };

  const getAllPacks = (): void => {
    dispatch(setPacksParams({ ...packsQueryParams, user_id: undefined }));
    setValue(false);
  };

  return (
    <ButtonGroup
      className={styles.filteredContainer}
      disabled={status === RequestStatus.LOADING}
    >
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
