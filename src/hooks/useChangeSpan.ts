import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { getAvatar, getName } from 'features/auth/authSelectors';
import { updateUser } from 'features/forgot/forgotReducer';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

interface ReturnType {
  editMode: boolean;
  title: string;
  activateEditMode: () => void;
  activateViewMode: () => void;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPressHandler: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const useChangeSpan = (): ReturnType => {
  const dispatch = useAppDispatch();

  const name = useAppSelector(getName);
  const avatar = useAppSelector(getAvatar);

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(name);

  const activateEditMode = (): void => {
    setEditMode(true);
  };

  const activateViewMode = (): void => {
    setEditMode(false);
    dispatch(updateUser({ name: title, avatar }));
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
