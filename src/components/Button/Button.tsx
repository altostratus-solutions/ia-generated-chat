import classes from "../../styles/Button.module.css";

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
  size = "sm",
  label,
  className,
  color = "base",
  icon,
  ...rest
  
}: ButtonProps) => {
  const classNames = `${classes.button} color-${color} size-${size}`;
  return (
    <button
      className={classNames}
      {...rest}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {label}
    </button>
  );
};
