import { FC, KeyboardEvent } from 'react';

import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import { CustomModal } from '../CustomModal';

import styles from './PacksModal.module.scss';

import { CancelModalButton } from 'common/components/Buttons/CancelModalButton/CancelModalButton';
import { ModalButton } from 'common/components/Buttons/ModalButton/ModalButton';
import { ModalInput } from 'common/components/ModalInput/ModalInput';
import { ModalInputFile } from 'common/components/ModalInputFile/ModalInputFile';
import { useInput } from 'hooks/useInput';

type Props = {
  packTitle: string;
  onClick: (name: string) => void;
  open: boolean;
  closeModal: () => void;
  name: string | undefined;
};

export const PacksModal: FC<Props> = ({ packTitle, onClick, open, closeModal, name }) => {
  const { title, changeTitle } = useInput(name);

  const handleClick = (): void => {
    onClick(title);
  };

  const onKeyDownClick = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <CustomModal title={packTitle} open={open} closeModal={closeModal}>
      <div className={styles.modalsContainer}>
        <ModalInputFile label="Cover" />
        <ModalInput
          title={title}
          changeTitle={changeTitle}
          label="Name pack"
          onKeyDown={onKeyDownClick}
        />
        <FormControlLabel
          className={styles.modalsCheckbox}
          control={<Checkbox size="small" />}
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
