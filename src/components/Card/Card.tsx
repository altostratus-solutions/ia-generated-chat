import React from "react";
import classNames from "classnames";
import classes from "../../styles/Card.module.css";
import { options } from "../../constants";

export type CardProps = {
  children: React.ReactNode;
  color?: (typeof options.colors)[number];
  size?: (typeof options.sizes)[number];
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
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={classNames(
        classes.card,
        {
          [classes[`color-${color}`]]: color,
          [classes[`size-${size}`]]: size,
          [classes[`is-dragable`]]: isDragable,
          [classes[`is-clickable`]]: isClickable,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
