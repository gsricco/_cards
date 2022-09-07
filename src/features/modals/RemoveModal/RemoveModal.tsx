import { FC } from 'react';

import { CustomModal } from '../CustomModal';

import styles from './RemoveModal.module.scss';

import { CancelModalButton, ModalButton } from 'common';

type Props = {
  name: string;
  title: string;
  onClick: () => void;
  open: boolean;
  closeModal: () => void;
};

export const RemoveModal: FC<Props> = ({ closeModal, title, onClick, open, name }) => {
  return (
    <CustomModal title={title} open={open} closeModal={closeModal}>
      <div className={styles.modalsContainer}>
        <div className={styles.textDelete}>
          <span>
            Do you really want to remove
            <b> {name}?</b>
            <br /> All cards will be deleted.
          </span>
        </div>

        <div className={styles.buttonContainer}>
          <CancelModalButton onClick={closeModal} />
          <ModalButton onClick={onClick} color="error" name="Delete" />
        </div>
      </div>
    </CustomModal>
  );
};
