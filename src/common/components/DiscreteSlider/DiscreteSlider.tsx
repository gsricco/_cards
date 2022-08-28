import React, { FC, useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import styles from './DiscreteSlider.module.scss';

export const DiscreteSlider: FC = () => {
  const [value, setValue] = useState<number[]>([0, 1]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };

  return (
    <div className={styles.discreteContainer}>
      <span>Number of cards</span>
      <Box className={styles.discreteItems}>
        <div className={styles.discreteField}>{value[0]}</div>
        <Slider className={styles.slider} value={value} onChange={handleChange} />
        <div className={styles.discreteField}>{value[1]}</div>
      </Box>
    </div>
  );
};
