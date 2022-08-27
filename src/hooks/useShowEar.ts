import { useState } from 'react';

interface ReturnType {
  showPassword: boolean;
  showConfirmPassword: boolean;
  onButtonIconClick: () => void;
  onButtonIconConfirmClick: () => void;
}

export const useShowEar = (): ReturnType => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onButtonIconClick = (): void => {
    setShowPassword(!showPassword);
  };
  const onButtonIconConfirmClick = (): void => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return {
    showPassword,
    showConfirmPassword,
    onButtonIconClick,
    onButtonIconConfirmClick,
  };
};
