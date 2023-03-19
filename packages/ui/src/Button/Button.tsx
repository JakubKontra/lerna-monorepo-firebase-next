import React from 'react';
import { logger } from '@your-monorepo/core';

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const onClick = () => {
    logger('Logged');
  };
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
