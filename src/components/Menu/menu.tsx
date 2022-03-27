import React, { createContext, CSSProperties, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback;
}
interface IMenuContex {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContex>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [curActive, setCurActive] = useState(defaultIndex);
  const classes = classNames("mxp-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: number) => {
    setCurActive(index);
    onSelect?.(index);
  };
  const passedContext: IMenuContex = {
    index: curActive ?? 0,
    onSelect: handleClick,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      if (
        childElement.type.displayName === "MenuItem" ||
        childElement.type.displayName === "SubMenu"
      ) {
        return React.cloneElement(childElement, { index });
      } else {
        console.error("Warning:Menu only accept MenuItem as child");
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
