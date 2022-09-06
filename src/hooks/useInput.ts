import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

interface ReturnType {
  title: string;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  setTitle: Dispatch<SetStateAction<string>>;
  secondTitle: string;
  changeSecondTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  setSecondTitle: Dispatch<SetStateAction<string>>;
}

export const useInput = (): ReturnType => {
  const [title, setTitle] = useState('');
  const [secondTitle, setSecondTitle] = useState('');

  const changeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  const changeSecondTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setSecondTitle(event.currentTarget.value);
  };

  return {
    secondTitle,
    title,
    changeSecondTitle,
    changeTitle,
    setTitle,
    setSecondTitle,
  };
};
