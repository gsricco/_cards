import { FC } from 'react';

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import { MIN_SELECT_VALUE } from 'common/constants/constants';
import { getPackQueryParams, setPacksParams } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

type Props = {
  pageCount?: number;
};

export const MenuPageCount: FC<Props> = ({ pageCount }) => {
  const dispatch = useAppDispatch();

  const packQueryParams = useAppSelector(getPackQueryParams);

  const changeCardsSelectHandler = (event: SelectChangeEvent): void => {
    const pageCount = +event.target.value;

    dispatch(setPacksParams({ ...packQueryParams, pageCount }));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ mt: '35px' }} size="small" variant="outlined">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={`${pageCount || MIN_SELECT_VALUE}`}
          onChange={changeCardsSelectHandler}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
