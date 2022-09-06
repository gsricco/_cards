import { FC, ReactNode } from 'react';

import { Box, Modal } from '@mui/material';
import { FormikProps } from 'formik';

import { cardsModalType } from '../../../common/types/FormikTypes';

import styles from './CardsModal.module.scss';

type PacksModalProps = {
  children: ReactNode;
  formik: FormikProps<cardsModalType>;
  open: boolean;
  handleClose: () => void;
};

export const CardsModal: FC<PacksModalProps> = ({
  children,
  formik,
  open,
  handleClose,
}) => {
  // if (!open) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.CardsModalContainer}>
        <div className={styles.CardsModalHeader}>
          <h3>Add new pack</h3>
          <h3 onClick={handleClose} role="presentation">
            X
          </h3>
        </div>
        <form onSubmit={formik.handleSubmit}>{children}</form>
      </Box>
    </Modal>
  );
};
