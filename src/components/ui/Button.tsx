import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
