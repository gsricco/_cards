import { FC } from 'react';

import styles from './CardsModal.module.scss';

import { CancelModalButton, ModalButton, CustomModal, ModalInput } from 'common';
import { useInput } from 'hooks';

type Props = {
  onClick: (title: string, secondTitle: string) => void;
  packTitle: string;
  open: boolean;
  closeModal: () => void;
};

export const CardsModal: FC<Props> = ({ onClick, closeModal, open, packTitle }) => {
  const { title, setTitle, changeTitle, changeSecondTitle, secondTitle, setSecondTitle } =
    useInput();

  const handleClick = (): void => {
    onClick(title, secondTitle);
    setTitle('');
    setSecondTitle('');
  };

  return (
    <CustomModal title={packTitle} open={open} closeModal={closeModal}>
      <div className={styles.modalsContainer}>
        <ModalInput title={title} changeTitle={changeTitle} label="Question" />
        <ModalInput title={secondTitle} changeTitle={changeSecondTitle} label="Answer" />

        <div className={styles.buttonContainer}>
          <CancelModalButton onClick={closeModal} />
          <ModalButton onClick={handleClick} color="primary" name="Save" />
        </div>
      </div>
    </CustomModal>
  );
};
