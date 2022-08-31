import { FC, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSearchParams } from 'react-router-dom';

import styles from './DiscreteSlider.module.scss';

import { getPacks } from 'features';
import { useAppDispatch } from 'hooks';

type Props = {
  minCardsCount: number;
  maxCardsCount: number;
};

export const DiscreteSlider: FC<Props> = ({ maxCardsCount, minCardsCount }) => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<number[]>([
    Number(searchParams.get('min')) || minCardsCount,
    Number(searchParams.get('max')) || maxCardsCount,
  ]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };

  const onChangeCommittedHandle = (): void => {
    const queryParams: { min?: string; max?: string } = {};

    if (value[0] !== minCardsCount) {
      queryParams.min = String(value[0]);
    } else {
      searchParams.delete('min');
    }

    if (value[1] !== maxCardsCount) {
      queryParams.max = String(value[1]);
    } else {
      searchParams.delete('max');
    }

    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...queryParams,
    });
  };

  useEffect(() => {
    dispatch(
      getPacks({
        min: value[0],
        max: value[1],
        pageCount: 8,
      }),
    );
  }, [minCardsCount, maxCardsCount, searchParams]);

  return (
    <div className={styles.discreteContainer}>
      <span>Number of cards</span>
      <Box className={styles.discreteItems}>
        <div className={styles.discreteField}>{value[0] || minCardsCount}</div>
        <Slider
          min={minCardsCount}
          max={maxCardsCount}
          className={styles.slider}
          value={value}
          onChange={handleChange}
          onChangeCommitted={onChangeCommittedHandle}
        />
        <div className={styles.discreteField}>{value[1] || maxCardsCount}</div>
      </Box>
    </div>
  );
};
