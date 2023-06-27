import { InputHTMLAttributes, forwardRef } from "react";
import classnames from "../../styles/Input.module.css";
import classNames from "classnames";
export type InputProps = {
  label?: string;
  showLabel?: boolean;
  isValid?: boolean;
  name: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      disabled = false,
      showLabel = true,
      error,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        {showLabel && <label htmlFor={name}>{label}</label>}
        <input
          ref={ref}
          name={name}
          disabled={disabled}
          className={classNames(
            classnames.input,
            { [classnames["input-invalid"]]: error },
            className
          )}
          {...rest}
        />
        {error && <p className={classnames['input-error']}>{error}</p>}
      </>
    );
  }
);
export default Input;
