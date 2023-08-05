var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useState } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = useState(defaultIndex), curActive = _a[0], setCurActive = _a[1];
    var classes = classNames("mxp-menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
    });
    var handleClick = function (index) {
        setCurActive(index);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(index);
    };
    var passedContext = {
        index: curActive !== null && curActive !== void 0 ? curActive : "0",
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem" ||
                childElement.type.displayName === "SubMenu") {
                return React.cloneElement(childElement, { index: "".concat(index) });
            }
            else {
                console.error("Warning:Menu only accept MenuItem as child");
            }
        });
    };
    return (_jsx("ul", __assign({ className: classes, style: style, "data-testid": "test-menu" }, { children: _jsx(MenuContext.Provider, __assign({ value: passedContext }, { children: renderChildren() })) })));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenSubMenus: [],
};
export default Menu;
