import { ChangeEvent, FC } from 'react';

import { FormControl, Input, InputLabel } from '@mui/material';

import styles from './ModalInput.module.scss';

type Props = {
  title: string;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export const ModalInput: FC<Props> = ({ title, changeTitle, label }) => {
  return (
    <FormControl variant="standard" className={styles.container}>
      <InputLabel htmlFor="input-with-icon-adornment" className={styles.fieldsTitle}>
        {label}
      </InputLabel>
      <Input value={title} onChange={changeTitle} className={styles.fields} />
    </FormControl>
  );
};
