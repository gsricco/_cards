import React, { ChangeEvent, FC, useState } from 'react';

import Button from '@mui/material/Button';

import defaultAva from '../../../assets/images/notFound.png';

import styles from './ModalInputFile.module.scss';

type Props = {
  label: string;
};

export const ModalInputFile: FC<Props> = ({ label }) => {
  const [picQuestion, setPicQuestion] = useState(defaultAva);
  const [isPicQuestion, setIsPicQuestion] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      // eslint-disable-next-line no-magic-numbers
      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          setPicQuestion(file64);
        });
      } else {
        alert('Error: Файл слишком большого размера');
      }
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
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
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={styles.uploadTitilePicture}>
        {label}:
        <input type="file" onChange={uploadHandler} style={{ display: 'none' }} />
        <Button variant="text" component="span" className={styles.uploadButton}>
          Change cover
        </Button>
      </label>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={styles.uploadFieldPictures}>
        <img
          src={isPicQuestion ? defaultAva : picQuestion}
          style={{ maxWidth: '340px', maxHeight: '115px' }}
          onError={errorHandler}
          alt="ava"
        />
      </label>
    </div>
  );
};
