import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}
  
const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;