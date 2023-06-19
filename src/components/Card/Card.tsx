import React from "react";

import classnames from "../../styles/Card.module.css";
export const options = {
  colors: ["base", "primary", "secondary"] as Array<
    "base" | "primary" | "secondary"
  >,
  sizes: ["sm", "md", "lg"] as Array<"sm" | "md" | "lg">,
};

export type CardProps = {
  children: React.ReactNode;
  color?:typeof options.colors[number];
  size?: typeof options.sizes[number];
  isDragable?: boolean;
  isClickable?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function Card({
  children,
  color = "primary",
  size = "sm",
  isDragable = false,
  isClickable = false,
  ...rest
}: CardProps) {
  const classNames = `${classnames.card} color-${color} size-${size} ${
    isDragable ? "is-dragable" : ""
  } ${isClickable ? "is-clickable" : ""}`;
  return (
    <div className={classNames  } {...rest}>
      {children}
    </div>
  );
}

export default Card;
