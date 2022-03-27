import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  title: string;
  index?: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { title, index, className, children } = props;
  const context = useContext(MenuContext);
  const [menuOpen, setMenuOpen] = useState(
    Array.isArray(context.defaultOpenSubMenus) && index
      ? context.defaultOpenSubMenus.includes(index)
      : false
  );
  const classes = classNames("mxp-menu-item mxp-submenu-item", className, {
    "is-active": context.index === index,
  });
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, { index: `${index}-${i}` });
      } else {
        console.error("Warning:SubMenu only accept MenuItem as child");
      }
    });
    const subMenuClasses = classNames("mxp-submenu", {
      "menu-opened": menuOpen,
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen((open) => !open);
  };
  let timer: NodeJS.Timeout;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };
  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const mouseEvents =
    context.mode === "vertical"
      ? {}
      : {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        };
  return (
    <li key={index} className={classes} {...mouseEvents}>
      <div className="mxp-submenu-title" onClick={handleClick} {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
