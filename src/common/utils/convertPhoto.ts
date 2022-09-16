import { ChangeEvent } from 'react';

const MAX_FILE_SIZE = 4000000;

export const uploadHandler = (
  event: ChangeEvent<HTMLInputElement>,
  callback: (file64: string) => void,
): void => {
  if (event.target.files && event.target.files.length) {
    const file = event.target.files[0];

    if (file.size < MAX_FILE_SIZE) {
      convertFileToBase64(file, (file64: string) => {
        callback(file64);
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
