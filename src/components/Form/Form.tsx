import React, { FormEvent, ReactNode } from "react";
import classes from "../../styles/Form.module.css";
import classNames from "classnames";
type FormProps = {
  handleSubmit?: (formData: FormData) => void;
  children: ReactNode;
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

interface FormData {
  [key: string]: string;
}

const Form: React.FC<FormProps> = ({
  handleSubmit,
  children,
  className,
  ...rest
}) => {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formNode = e.target as HTMLFormElement;
    const formInputs = Array.from(formNode.elements).filter(
      (element) => element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName === "SELECT" 
    ) as HTMLInputElement[];

    const formData = formInputs.reduce((data: FormData, input) => {
      data[input.name] = input.value;
      return data;
    }, {} as FormData);

    handleSubmit?.(formData);
    formNode.reset();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={classNames(classes["form-container"], className)}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
