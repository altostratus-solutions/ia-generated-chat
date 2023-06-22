import { InputHTMLAttributes } from "react";
import classnames from  '../../styles/Input.module.css';
import classNames from "classnames";
export type InputProps = {
  label?: string;
  showLabel?: boolean;
  isValid?: boolean;
  name: string;
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


  return (
    <>
      {showLabel && <label htmlFor={name}>{label}</label>}
      <input
      name={name}
      disabled={disabled}
      className={classNames(
        classnames.input,
        { [classnames['input-invalid']]: !isValid },
        className
      )}
      {...rest}
      />
    </>
  );
}
