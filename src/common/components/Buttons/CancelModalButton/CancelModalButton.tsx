import { FC } from 'react';

import Button from '@mui/material/Button';

import styles from './CancelModalButton.module.scss';

type Props = {
  onClick: () => void;
};

export const CancelModalButton: FC<Props> = ({ onClick }) => {
  return (
    <Button
      className={styles.cancelButton}
      type="submit"
      variant="contained"
      color="inherit"
      onClick={onClick}
    >
      Cancel
    </Button>
  );
};
