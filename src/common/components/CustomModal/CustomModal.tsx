import React, { FC, ReactNode } from 'react';

import { Box, Modal } from '@mui/material';

import styles from './CustomModal.module.scss';

type ModalWindowProps = {
  children: ReactNode;
};

export const CustomModal: FC<ModalWindowProps> = ({ children }) => {
  const [active, setActive] = React.useState(true);

  const handleActive = (): void => {
    setActive(false);
  };

  return (
    <div>
      <Modal
        open={active}
        onClose={handleActive}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.container}>{children}</Box>
      </Modal>
    </div>
  );
};
