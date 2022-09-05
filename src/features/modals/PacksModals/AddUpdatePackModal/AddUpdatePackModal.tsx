import { FC } from 'react';

import { Checkbox, FormControl, Input, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

import styles from './AddUpdatePackModal.module.scss';

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
        <FormControl variant="standard" className={styles.fieldsContainer}>
          <InputLabel htmlFor="input-with-icon-adornment" className={styles.fieldsTitle}>
            Name pack
          </InputLabel>
          <Input value={title} onChange={changeTitle} className={styles.fields} />
        </FormControl>
        <FormControlLabel
          className={styles.modalsCheckbox}
          control={<Checkbox defaultChecked />}
          label="Private pack"
        />
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
            className={styles.modalsButton}
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
