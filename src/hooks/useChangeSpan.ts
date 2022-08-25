import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { getName, updateUser } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const useChangeSpan: () => {
  editMode: boolean;
  title: string;
  activateEditMode: () => void;
  activateViewMode: () => void;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void;
} = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector<string>(getName);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(name);

  const activateEditMode = (): void => {
    setEditMode(true);
  };
  const activateViewMode = (): void => {
    setEditMode(false);
    dispatch(updateUser(title));
  };
  const changeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      activateViewMode();
    }
  };

  return {
    editMode,
    title,
    activateEditMode,
    activateViewMode,
    changeTitle,
    onKeyPressHandler,
  };
};
