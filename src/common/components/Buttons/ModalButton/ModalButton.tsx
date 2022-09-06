import { FC } from 'react';

import Button from '@mui/material/Button';

import styles from './ModalButton.module.scss';

type Props = {
  onClick: () => void;
  name: string;
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
};

export const ModalButton: FC<Props> = ({ onClick, color, name }) => {
  return (
    <Button
      className={styles.deleteButton}
      type="submit"
      variant="contained"
      color={color}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};
