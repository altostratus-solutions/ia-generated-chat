import { InputHTMLAttributes } from "react";
import '../../styles/Input.css';
export type InputProps = {
  label?: string;
  showLabel?: boolean;
  isValid?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
export default function Input({
  label,
  name,
  disabled = false,
  showLabel = true,
  isValid = true,
  className,
  ...rest
}: InputProps) {

  const inputClass = `${isValid ? '' : 'input-invalid'} ${className}`;

  return (
    <>
      {showLabel && <label htmlFor={name}>{label}</label>}
      <input
      disabled={disabled}
      className={inputClass}
      {...rest}
      />
    </>
  );
}
