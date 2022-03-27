import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  title: string;
  index?: number;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { title, index, className, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames("mxp-menu-item mxp-submenu-item", className, {
    "is-active": context.index === index,
  });
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return childElement;
      } else {
        console.error("Warning:SubMenu only accept MenuItem as child");
      }
    });
    return <ul className="mxp-submenu">{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes}>
      <div className="mxp-submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
