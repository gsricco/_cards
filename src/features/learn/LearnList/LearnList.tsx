import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

import { Radio, RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const grades = [
  { value: 1, text: 'Did not know' },
  { value: 2, text: 'Forgot' },
  { value: 3, text: 'A lot of thought' },
  { value: 4, text: 'Confused' },
  { value: 5, text: 'Knew the answer' },
];

type Props = {
  setGrade: Dispatch<SetStateAction<number>>;
};

export const LearnList: FC<Props> = ({ setGrade }) => {
  const onGradeSetChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setGrade(+event.currentTarget.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      Rate yourself:
      <RadioGroup
        defaultValue={1}
        onChange={onGradeSetChange}
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        {grades.map(grade => (
          <FormControlLabel
            key={Math.random()}
            value={grade.value}
            control={<Radio />}
            label={grade.text}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
