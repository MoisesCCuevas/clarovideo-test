import React from "react";
import '../../../theme/components/core/button.scss'

interface buttonProps {
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
};

const Button : React.FC<buttonProps> = (props) => {
  const {
    disabled,
    onClick,
    children
  } = props;

  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
