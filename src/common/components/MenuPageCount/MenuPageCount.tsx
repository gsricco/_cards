// @ts-ignore
import { FC, SelectChangeEvent, useState } from 'react';

import { Box, FormControl, MenuItem, Select } from '@mui/material';

import { getPackQueryParams, setPacksParams } from '../../../features';
import { useAppDispatch, useAppSelector } from '../../../hooks';

// import styles from './MenuPageCount.module.scss';

type MenuPageCountProps = {
  pageCount: number;
};

const MenuPageCount: FC<MenuPageCountProps> = ({ pageCount }) => {
  // eslint-disable-next-line no-magic-numbers
  const [selectedNumber, setSelectedNumber] = useState(5 || pageCount);
  const queryParams = useAppSelector(getPackQueryParams);
  const dispatch = useAppDispatch();

  const onChangeSelect = (e: SelectChangeEvent<HTMLInputElement>): void => {
    setSelectedNumber(e.target.value);
    dispatch(setPacksParams({ ...queryParams, pageCount: selectedNumber }));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ mt: '35px' }} size="small">
        <Select
          value={selectedNumber}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={onChangeSelect}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MenuPageCount;
