import { useState } from 'react';

export const useShowEar: () => {
  showPassword: boolean;
  showConfirmPassword: boolean;
  onButtonIconClick: () => void;
  onButtonIconConfirmClick: () => void;
} = () => {
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
