import React, { CSSProperties } from "react";
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
