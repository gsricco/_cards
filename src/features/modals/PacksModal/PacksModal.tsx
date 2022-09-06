import { FC } from 'react';

import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import styles from './PacksModal.module.scss';

import { CustomModal, CancelModalButton, ModalButton, ModalInput } from 'common';
import { useInput } from 'hooks';

type Props = {
  packTitle: string;
  onClick: (name: string) => void;
  open: boolean;
  closeModal: () => void;
};

export const PacksModal: FC<Props> = ({ packTitle, onClick, open, closeModal }) => {
  const { title, setTitle, changeTitle } = useInput();

  const handleClick = (): void => {
    onClick(title);
    setTitle('');
  };

  return (
    <CustomModal title={packTitle} open={open} closeModal={closeModal}>
      <div className={styles.modalsContainer}>
        <ModalInput title={title} changeTitle={changeTitle} label="Name pack" />
        <FormControlLabel
          className={styles.modalsCheckbox}
          control={<Checkbox defaultChecked />}
          label="Private pack"
        />
        <div className={styles.buttonContainer}>
          <CancelModalButton onClick={closeModal} />
          <ModalButton onClick={handleClick} color="primary" name="Save" />
        </div>
      </div>
    </CustomModal>
  );
};
