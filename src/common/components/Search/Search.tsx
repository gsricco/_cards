import { ChangeEvent, FC, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import styles from './Search.module.scss';

import { AppThunk, CardsParamsType, PacksParamsType } from 'common';
import { DELAY_TIME } from 'common/constants/constants';
import { setCardsParams, setPacksParams, getCardsPackId } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

type Props = {
  width?: string;
  getData: () => AppThunk;
  searchParam: 'packName' | 'cardQuestion';
  queryParams: PacksParamsType | CardsParamsType;
};

export const Search: FC<Props> = ({ getData, searchParam, queryParams, width }) => {
  const dispatch = useAppDispatch();

  const cardsPack_id = useAppSelector(getCardsPackId);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    if (searchParam === 'packName') {
      dispatch(setPacksParams({ [searchParam]: e.currentTarget.value }));
    } else {
      dispatch(setCardsParams({ [searchParam]: e.currentTarget.value, cardsPack_id }));
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(getData());
    }, DELAY_TIME);

    return () => clearTimeout(id);
  }, [queryParams]);

  return (
    <div className={styles.searchContainer} style={{ width }}>
      <span>Search</span>
      <Paper className={styles.searchField} component="form">
        <IconButton className={styles.searchIcon} type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          className={styles.searchInput}
          placeholder="Provide your text"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChangeInput}
          style={{ width }}
        />
      </Paper>
    </div>
  );
};
