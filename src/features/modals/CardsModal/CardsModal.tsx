import React, { FC, KeyboardEvent, useState } from 'react';

import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { CustomModal } from '../CustomModal';

import styles from './CardsModal.module.scss';

import { CancelModalButton, ModalButton, ModalInput, ModalInputFile } from 'common';
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
  const { title, secondTitle, changeSecondTitle, changeTitle } = useInput(name, answer);
  const [typeQuestion, setTypeQuestion] = useState('text');

  const handleChange = (event: SelectChangeEvent): void => {
    setTypeQuestion(event.target.value as string);
  };

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
        <div className={styles.modalsTypeQuestion}>Choose a question format</div>
        <Box sx={{ minWidth: 347, mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select type</InputLabel>
            <Select
              className={styles.selectType}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeQuestion}
              label="typeQuestion"
              onChange={handleChange}
            >
              <MenuItem value="text">Text</MenuItem>
              <MenuItem value="picture">Picture</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {typeQuestion === 'text' ? (
          <>
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
          </>
        ) : (
          <>
            <ModalInputFile label="Question" />
            <ModalInputFile label="Answer" />
          </>
        )}
        <div className={styles.buttonContainer}>
          <CancelModalButton onClick={closeModal} />
          <ModalButton onClick={handleClick} color="primary" name="Save" />
        </div>
      </div>
    </CustomModal>
  );
};
