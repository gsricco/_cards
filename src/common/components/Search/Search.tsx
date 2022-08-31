import React, { ChangeEvent, FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import styles from './Search.module.scss';

type Props = {
  widthField?: string;
};
export const Search: FC<Props> = ({ widthField }) => {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): string => {
    return e.target.value;
  };

  return (
    <div className={styles.searchContainer}>
      <span>Search</span>
      <Paper
        className={styles.searchField}
        component="form"
        style={{ width: widthField }}
      >
        <IconButton className={styles.searchIcon} type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          className={styles.searchInput}
          placeholder="Provide your text"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChangeInput}
          style={{ width: widthField }}
        />
      </Paper>
    </div>
  );
};
