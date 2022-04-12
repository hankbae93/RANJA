import React from 'react';
import LoadingProgressBar from '../loading-progress-bar/LoadingProgressBar';

interface ButtonProps {
  title: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  loading: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, loading, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button">
      {loading ? <LoadingProgressBar /> : title}
    </button>
  );
};

export default Button;
