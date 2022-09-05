import { FC, ReactNode } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import styles from './DefaultModal.module.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '395px',
  bgcolor: 'background.paper',
  borderRadius: '2px',
  boxShadow: 24,
};

type PropsType = {
  title: string;
  children: ReactNode;
  open: boolean;
  closeModal: () => void;
};

export const DefaultModal: FC<PropsType> = ({ children, title, open, closeModal }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={closeModal}
    >
      <div>
        <Box sx={style}>
          <div className={styles.titleModals}>
            <Typography>{title}</Typography>
            <IconButton onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Box>{children}</Box>
        </Box>
      </div>
    </Modal>
  );
};
