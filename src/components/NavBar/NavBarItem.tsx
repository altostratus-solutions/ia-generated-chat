import { ReactNode } from "react";
import styles from "../../styles/NavBar.module.css";
import classNames from "classnames";

type NavBarItemProps = {
  Icon?: () => ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

function NavBarItem({
  Icon = () => null,
  text,
  active = false,
  onClick,
}: NavBarItemProps) {
  return (
    <li
      className={classNames(styles["navbar-item"], {
        [styles["navbar-item-active"]]: active,
      })}
      onClick={() => onClick?.()}
    >
      {Icon?.()}
      <span className={`${styles["navbar-text"]}`}>{text}</span>
    </li>
  );
}

export default NavBarItem;
