import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 hover:shadow-indigo-500/25",
    secondary: "bg-gray-800 text-white hover:bg-gray-900 hover:scale-105",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:scale-105"
  };
  
  return (
    <button 
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;