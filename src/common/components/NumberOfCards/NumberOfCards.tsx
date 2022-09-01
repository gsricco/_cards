import { FC, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSearchParams } from 'react-router-dom';

import styles from './NumberOfCards.module.scss';

import { setPacksParams } from 'features/packs/packs-reducer';
import { useAppDispatch } from 'hooks';

type Props = {
  minCardsCount: number;
  maxCardsCount: number;
};

export const NumberOfCards: FC<Props> = ({ maxCardsCount, minCardsCount }) => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<number[]>([
    Number(searchParams.get('min')) || minCardsCount,
    Number(searchParams.get('max')) || maxCardsCount,
  ]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };

  const onCommittedChange = (): void => {
    const params: { min?: string; max?: string } = {};

    if (value[0] !== minCardsCount) {
      params.min = String(value[0]);
    } else {
      searchParams.delete('min');
    }

    if (value[1] !== maxCardsCount) {
      params.max = String(value[1]);
    } else {
      searchParams.delete('max');
    }

    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...params,
    });
  };

  useEffect(() => {
    dispatch(setPacksParams({ min: value[0], max: value[1] }));
  }, [searchParams]);

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
          onChangeCommitted={onCommittedChange}
        />
        <div className={styles.discreteField}>{value[1] || maxCardsCount}</div>
      </Box>
    </div>
  );
};
