import { FC, KeyboardEvent } from 'react';

import styles from './CardsModal.module.scss';

import { CancelModalButton, CustomModal, ModalButton, ModalInput } from 'common';
import { useInput } from 'hooks';

type Props = {
  onClick: (title: string, secondTitle: string) => void;
  packTitle: string;
  open: boolean;
  closeModal: () => void;
  name: string;
  answer: string;
};

export const CardsModal: FC<Props> = ({
  onClick,
  closeModal,
  open,
  packTitle,
  name,
  answer,
}) => {
  const { title, secondTitle, changeTitle, changeSecondTitle } = useInput(name, answer);

  const handleClick = (): void => {
    onClick(title, secondTitle);
  };

  const onKeyDownClick = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <CustomModal title={packTitle} open={open} closeModal={closeModal}>
      <div className={styles.modalsContainer}>
        <ModalInput
          title={title}
          changeTitle={changeTitle}
          label="Question"
          onKeyDown={onKeyDownClick}
        />
        <ModalInput
          title={secondTitle}
          changeTitle={changeSecondTitle}
          label="Answer"
          onKeyDown={onKeyDownClick}
        />

        <div className={styles.buttonContainer}>
          <CancelModalButton onClick={closeModal} />
          <ModalButton onClick={handleClick} color="primary" name="Save" />
        </div>
      </div>
    </CustomModal>
  );
};
