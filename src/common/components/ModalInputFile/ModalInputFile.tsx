import React, { ChangeEvent, FC, useState } from 'react';

import Button from '@mui/material/Button';

import styles from './ModalInputFile.module.scss';

import defaultCover from 'assets/images/defaultCover.svg';

const MAX_FILE_SIZE = 4000000;

type Props = {
  label: string;
};

export const ModalInputFile: FC<Props> = ({ label }) => {
  const [picQuestion, setPicQuestion] = useState(defaultCover);
  const [isPicQuestion, setIsPicQuestion] = useState(false);

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file.size < MAX_FILE_SIZE) {
        convertFileToBase64(file, (file64: string) => {
          setPicQuestion(file64);
        });
      } else {
        alert('Error: Файл слишком большого размера');
      }
    }
  };

  const convertFileToBase64 = (file: File, callBack: (value: string) => void): void => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const file64 = reader.result as string;

      callBack(file64);
    };
    reader.readAsDataURL(file);
  };

  const errorHandler = (): void => {
    setIsPicQuestion(true);
    alert('Кривая картинка');
  };

  return (
    <div>
      <label className={styles.uploadTitlePicture}>
        {label}:
        <input type="file" onChange={uploadHandler} style={{ display: 'none' }} />
        <Button variant="text" component="span" className={styles.uploadButton}>
          Change cover
        </Button>
      </label>
      <label htmlFor="picture" className={styles.uploadFieldPictures}>
        <img
          src={isPicQuestion ? defaultCover : picQuestion}
          style={{ maxWidth: '347px', maxHeight: '120px' }}
          onError={errorHandler}
          alt="ava"
        />
      </label>
    </div>
  );
};
