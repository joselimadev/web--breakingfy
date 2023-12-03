'use client';

interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  type = 'button',
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 
        transition w-full bg-green-800 text-white outline-none py-4 text-lg font-semibold
      `}
    >
      {label}
    </button>
  );
};

export default Button;
