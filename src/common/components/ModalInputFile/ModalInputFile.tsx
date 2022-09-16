import { ChangeEvent, FC, useState } from 'react';

import Button from '@mui/material/Button';

import styles from './ModalInputFile.module.scss';

import defaultCover from 'assets/images/defaultCover.svg';
import { uploadHandler } from 'common/utils/convertPhoto';

type Props = {
  label: string;
};

export const ModalInputFile: FC<Props> = ({ label }) => {
  const [picQuestion, setPicQuestion] = useState(defaultCover);
  const [isPicQuestion, setIsPicQuestion] = useState(false);

  const fileCallback = (file64: string): void => {
    setPicQuestion(file64);
  };

  const onUploadPhoto = (event: ChangeEvent<HTMLInputElement>): void => {
    uploadHandler(event, fileCallback);
  };

  const errorHandler = (): void => {
    setIsPicQuestion(true);
    console.error('Кривая картинка');
  };

  return (
    <div>
      <label className={styles.uploadTitlePicture}>
        {label}:
        <input type="file" onChange={onUploadPhoto} style={{ display: 'none' }} />
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
