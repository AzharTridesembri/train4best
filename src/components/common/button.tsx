import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'pink' | 'orange' | 'gray'; // Menambahkan pilihan warna hijau
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const baseStyles = 'rounded-md font-medium transition-colors duration-200';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    green: 'bg-green-600 text-white hover:bg-green-700',
    red: 'bg-red-600 text-white hover:bg-red-700',
    yellow: 'bg-yellow-600 text-white hover:bg-yellow-700',
    blue: 'bg-blue-600 text-white hover:bg-blue-700',
    purple: 'bg-purple-600 text-white hover:bg-purple-700',
    pink: 'bg-pink-600 text-white hover:bg-pink-700',
    orange: 'bg-orange-600 text-white hover:bg-orange-700',
    gray: 'bg-gray-600 text-white hover:bg-gray-700',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyle}
        ${disabledStyle}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
