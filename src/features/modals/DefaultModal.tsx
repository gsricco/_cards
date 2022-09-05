import { FC, ReactNode } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
      sx={style}
      onClose={closeModal}
    >
      <div>
        <div>
          <Typography>{title}</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <Box>{children}</Box>
      </div>
    </Modal>
  );
};
