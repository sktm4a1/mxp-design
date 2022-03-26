import React, { CSSProperties, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { disabled, className, style, children, index } = props;
  const context = useContext(MenuContext);
  const classes = classNames("mxp-menuItem", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "number") {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
