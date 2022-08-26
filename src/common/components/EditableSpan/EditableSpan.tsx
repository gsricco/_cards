import { FC } from 'react';

import { Button, Input, InputAdornment, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import styles from './EditableSpan.module.scss';

import pencilIcon from 'assets/images/pencil.png';
import { useChangeSpan } from 'hooks';

export const EditableSpan: FC = () => {
  const {
    editMode,
    title,
    activateViewMode,
    activateEditMode,
    onKeyPressHandler,
    changeTitle,
  } = useChangeSpan();

  return (
    <div>
      {editMode ? (
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">NickName</InputLabel>
          <Input
            className={styles.fields}
            type="text"
            value={title}
            margin="dense"
            onChange={changeTitle}
            autoFocus
            onKeyDown={onKeyPressHandler}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  aria-label="toggle password visibility"
                  className={styles.nikButton}
                  variant="contained"
                  onClick={activateViewMode}
                  size="small"
                  disabled={!title}
                >
                  SAVE
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
      ) : (
        <span className={styles.nikName} onDoubleClick={activateEditMode}>
          {title}
          <img className={styles.pencilIcon} alt="checkEmailImage" src={pencilIcon} />
        </span>
      )}
    </div>
  );
};
