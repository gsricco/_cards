import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import { Radio, RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import styles from './LearnList.module.scss';

import { GRADES, KEY } from 'common/constants/constants';

type Props = {
  setGrade: Dispatch<SetStateAction<number>>;
};

export const LearnList: FC<Props> = ({ setGrade }) => {
  const onGradeSetChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setGrade(+event.currentTarget.value);
  };

  return (
    <div className={styles.learnList}>
      Rate yourself:
      <RadioGroup
        className={styles.learnListRadio}
        defaultValue={1}
        onChange={onGradeSetChange}
      >
        {GRADES.map(grade => (
          <FormControlLabel
            key={KEY}
            value={grade.value}
            control={<Radio />}
            label={grade.text}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
