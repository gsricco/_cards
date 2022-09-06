import { ChangeEvent, FC, KeyboardEvent } from 'react';

import { FormControl, Input, InputLabel } from '@mui/material';

import styles from './ModalInput.module.scss';

type Props = {
  title: string;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const ModalInput: FC<Props> = ({ title, changeTitle, label, onKeyDown }) => {
  return (
    <FormControl variant="standard" className={styles.container}>
      <InputLabel htmlFor="input-with-icon-adornment" className={styles.fieldsTitle}>
        {label}
      </InputLabel>
      <Input
        value={title}
        onChange={changeTitle}
        className={styles.fields}
        onKeyDown={onKeyDown}
      />
    </FormControl>
  );
};
