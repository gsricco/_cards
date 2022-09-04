import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Input, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import styles from './PacksModals.module.scss';

type Props = {
  titlePack: string;
  nameModalsPack: string;
};

export const PacksModals: FC<Props> = ({ titlePack, nameModalsPack }) => {
  const [title, setTitle] = useState(titlePack);
  const changeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };
  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      setTitle(event.currentTarget.value);
    }
  };

  return (
    <div className={styles.modalsContainer}>
      <div className={styles.titleModal}>
        <span>{nameModalsPack}</span>
        <IconButton aria-label="delete">
          <CloseIcon />
        </IconButton>
      </div>
      {nameModalsPack !== 'Delete Pack' ? (
        <>
          <FormControl variant="outlined" className={styles.fieldsContainer}>
            <InputLabel
              className={styles.fieldsTitle}
              htmlFor="input-with-icon-adornment"
            >
              Name pack
            </InputLabel>
            <Input
              className={styles.fields}
              type="text"
              value={title}
              margin="dense"
              onChange={changeTitle}
              autoFocus
              onKeyDown={onKeyPressHandler}
            />
          </FormControl>
          <div className={styles.modalsCheckbox}>
            <FormControlLabel
              label="Private pack"
              control={<Checkbox name="Private pack" size="small" defaultChecked />}
            />
          </div>
        </>
      ) : (
        <div className={styles.textDelete}>
          <span>
            Do you really want to remove <b>{titlePack}?</b>
            <br /> All cards will be deleted.
          </span>
        </div>
      )}
      <div className={styles.buttonContainer}>
        <Button
          className={styles.modalsButton}
          type="submit"
          variant="contained"
          color="inherit"
        >
          Cancel
        </Button>
        {nameModalsPack !== 'Delete Pack' ? (
          <Button
            className={styles.modalsButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        ) : (
          <Button
            className={styles.modalsButtonDelete}
            type="submit"
            variant="contained"
            color="warning"
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};
