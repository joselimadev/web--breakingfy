'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: any;
  errors?: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        {...register(id, { required })}
        type={type}
        placeholder={' '}
        disabled={disabled}
        className={`
          peer 
          w-full 
          p-4
          pt-6 
          font-semibold 
          bg-white 
          border-2 
          rounded-md 
          outline-none 
          trasition 
          disabled:opacity-70 
          default:cursor-not-allowed
          pl-4
          ${errors && errors[id] ? `border-rose-500` : `border-neutral-300`}
          ${
            errors && errors[id]
              ? `focus:border-rose-500`
              : `focus:border-green-500`
          }
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute 
          text-md
          duration-150
          transform
          -translate-y-5
          scale-75
          top-6
          z-10
          origin-[0]
          left-4
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-5
          ${errors && errors[id] ? `text-rose-500` : `text-zinc-700`}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
