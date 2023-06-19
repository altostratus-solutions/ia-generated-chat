import classes from "../../styles/Button.module.css";
import classNames from 'classnames';
export const options = {
  colors: ["base", "primary", "secondary"] as Array<
    "base" | "primary" | "secondary"
  >,
  sizes: ["sm", "md", "lg"] as Array<"sm" | "md" | "lg">,
};

type ButtonProps = {
  size?: typeof options.sizes[number];
  label: string;
  color?: typeof options.colors[number];
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size ,
  label,
  className,
  color,
  icon,
  ...rest
  
}: ButtonProps) => {
  return (
    <button
      className={classNames(classes.button, {
        [classes[`color-${color}`]]: color,
        [classes[`size-${size}`]]: size,
      },className)}     
      {...rest}
    >
      {icon && <span className={classNames(classes.button__icon)}>{icon}</span>}
      {label}
    </button>
  );
};
