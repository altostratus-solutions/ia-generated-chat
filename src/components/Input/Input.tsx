import { InputHTMLAttributes } from "react";
import classnames from  '../../styles/Input.module.css';
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

  const inputClass = `${isValid ? '' : classnames['input-invalid']} ${className}`;

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
