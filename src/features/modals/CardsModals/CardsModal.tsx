import { FC, ReactNode, useState } from 'react';

import { Button, Modal, Box } from '@mui/material';
import { FormikProps } from 'formik';

import { cardsModalType } from '../../../common/types/FormikTypes';

import styles from './CardsModal.module.scss';

type PacksModalProps = {
  children: ReactNode;
  formik: FormikProps<cardsModalType>;
};

export const CardsModal: FC<PacksModalProps> = ({ children, formik }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.CardsModalContainer}>
          <div>
            <h3>Add new pack</h3>
            <h3>X</h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            {children}
            <div>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
