import React, { FC, forwardRef, useState } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: FC<React.SVGProps<SVGSVGElement>>;
  type: string;
  placeholder?: string;
  mask?: string;
}

const Input = forwardRef<HTMLInputElement,InputProps>(({ icon: Icon, mask, type="text", placeholder, ...rest},ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div style={{ position: 'relative'}}>
      <input
        {...rest}
        placeholder={placeholder}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        ref = {ref}
        className={`ring-1 ring-zinc-200 text-xs md:text-sm border-gray-300 focus:outline-1 focus:outline-nav rounded-md p-2 w-full h-9 shadow-sm ${
          rest.className || ''
        }`}
        style={{ paddingRight: Icon ? '2.5rem' : undefined }}
      />
      {Icon && (
        <button
          type='button'
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '2%',
            width: '1.5rem',
            cursor: 'pointer',
          }}
          onClick={handlePassword}
        >
          <Icon />
        </button>
      )}
    </div>
  );
});

export default Input;
