import { FC } from 'react';

import Button from '@mui/material/Button';

import { DefaultModal } from '../../DefaultModal';

import styles from './DeletePackModal.module.scss';

type Props = {
  name: string;
  title: string;
  onClick: () => void;
  open: boolean;
  closeModal: () => void;
};

export const DeletePackModal: FC<Props> = ({
  closeModal,
  title,
  onClick,
  open,
  name,
}) => {
  return (
    <DefaultModal title={title} open={open} closeModal={closeModal}>
      <div className={styles.modalsContainer}>
        <div className={styles.textDelete}>
          <span>
            Do you really want to remove
            <b> {name}?</b>
            <br /> All cards will be deleted.
          </span>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            className={styles.modalsButton}
            type="submit"
            variant="contained"
            color="inherit"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            className={styles.modalsButtonDelete}
            type="submit"
            variant="contained"
            color="primary"
            onClick={onClick}
          >
            Delete
          </Button>
        </div>
      </div>
    </DefaultModal>
  );
};
