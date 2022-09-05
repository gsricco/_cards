import { FC } from 'react';

import { Checkbox, Input } from '@mui/material';
import Button from '@mui/material/Button';

import styles from '../DeletePackModal/DeletePackModal.module.scss';

import { DefaultModal } from 'features';
import { useInput } from 'hooks';

type Props = {
  packTitle: string;
  onClick: (name: string) => void;
  open: boolean;
  closeModal: () => void;
};

export const AddUpdatePackModal: FC<Props> = ({
  packTitle,
  onClick,
  open,
  closeModal,
}) => {
  const { title, setTitle, changeTitle } = useInput();

  const handleClick = (): void => {
    onClick(title);

    setTitle('');
  };

  return (
    <DefaultModal title={packTitle} open={open} closeModal={closeModal}>
      <div className={styles.modalsContainer}>
        <div className={styles.textDelete}>
          <span>
            <b>{packTitle}</b>
            <br />
          </span>
        </div>

        <Input value={title} onChange={changeTitle} />
        <Checkbox />
        <div className={styles.buttonContainer}>
          <Button
            className={styles.modalsButton}
            type="submit"
            variant="contained"
            color="inherit"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            className={styles.modalsButtonDelete}
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Save
          </Button>
        </div>
      </div>
    </DefaultModal>
  );
};
