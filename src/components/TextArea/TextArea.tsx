import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import classnames from "../../styles/TextArea.module.css";
import classNames from "classnames";

type TextAreaProps = {
  label: string;
  error?: string;
  showLabel?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
const TextArea = <T extends FieldValues>({
  control,
  name,
  label,
  error,
  showLabel = true,
  rules,
  ...rest
}: UseControllerProps<T> & TextAreaProps) => {
  const {
    field: { onChange, onBlur, value, name: fieldName, ref },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <>
      {showLabel && <label htmlFor={fieldName}>{label}</label>}
      <textarea
        className={classNames({ [classnames["textarea-invalid"]]: error })}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={fieldName}
        ref={ref}
        {...rest}
      />
      {error && <p className={classnames["textarea-error"]}>{error}</p>}
    </>
  );
};

export default TextArea;
