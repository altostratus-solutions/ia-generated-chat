import React, { ReactNode } from "react";
import classes from "../../styles/Form.module.css";
import classNames from "classnames";
type FormProps = {
  children: ReactNode;
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const Form: React.FC<FormProps> = ({ children, className, ...rest }) => {
  return (
    <form
      className={classNames(classes["form-container"], className)}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
