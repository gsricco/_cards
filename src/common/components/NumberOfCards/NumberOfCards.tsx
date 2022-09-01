import { FC, useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import styles from './NumberOfCards.module.scss';

import { DELAY_TIME, MAX_NUMBER_OF_PACKS } from 'common/constants/constants';
import { getMaxPacksCount, getMinPacksCount, setPacksParams } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const NumberOfCards: FC = () => {
  const dispatch = useAppDispatch();

  const min = useAppSelector(getMinPacksCount);
  const max = useAppSelector(getMaxPacksCount);

  const [value, setValue] = useState<number[]>([0, max || MAX_NUMBER_OF_PACKS]);
  const [timerId, setTimerId] = useState(0);

  const handleChange = (event: Event, newValue: number | number[]): (() => void) => {
    const value = newValue as number[];

    const id = +setTimeout(() => {
      dispatch(setPacksParams({ min: value[0], max: value[1] }));
    }, DELAY_TIME);

    setValue(value);
    setTimerId(id);

    return () => clearTimeout(timerId);
  };

  return (
    <div className={styles.discreteContainer}>
      <span>Number of cards</span>
      <Box className={styles.discreteItems}>
        <div className={styles.discreteField}>{value[0]}</div>
        <Slider
          min={min}
          max={max}
          className={styles.slider}
          value={value}
          onChange={handleChange}
        />
        <div className={styles.discreteField}>{value[1]}</div>
      </Box>
    </div>
  );
};