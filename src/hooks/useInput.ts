import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

interface ReturnType {
  title: string;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  setTitle: Dispatch<SetStateAction<string>>;
}

export const useInput = (): ReturnType => {
  const [title, setTitle] = useState('');

  const changeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  return {
    title,
    changeTitle,
    setTitle,
  };
};
