import "../../styles/Button.css";
type ButtonProps = {
  size?: "small" | "medium" | "large";
  label: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = "medium",
  label,
  className,
  icon,
  ...rest
  
}: ButtonProps) => {
  return (
    <button
      className={["button", `button--${size}`, className].join(" ")}
      {...rest}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {label}
    </button>
  );
};
