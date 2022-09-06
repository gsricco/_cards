import { ChangeEvent, useState } from 'react';

import { EMPTY_STRING } from 'common/constants/constants';

interface ReturnType {
  title: string;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  secondTitle: string;
  changeSecondTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (name?: string, answer?: string): ReturnType => {
  const [title, setTitle] = useState(name || EMPTY_STRING);
  const [secondTitle, setSecondTitle] = useState(answer || EMPTY_STRING);

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
  };
};
