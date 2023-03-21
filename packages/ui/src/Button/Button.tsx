import React from 'react';
import { loggerFactory } from '@your-monorepo/core';


const logger = loggerFactory('@your-monorepo/ui/button');

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const onClick = () => {
    logger.info("clicked")
  };
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
