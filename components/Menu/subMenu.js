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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext, useRef, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
var SubMenu = function (props) {
    var title = props.title, index = props.index, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var _a = useState(Array.isArray(context.defaultOpenSubMenus) && index
        ? context.defaultOpenSubMenus.includes(index)
        : false), menuOpen = _a[0], setMenuOpen = _a[1];
    var submenuRef = useRef(null);
    var classes = classNames("mxp-menu-item mxp-submenu-item", className, {
        "is-active": context.index === index,
        "is-opened": menuOpen,
        "is-vertical": context.mode === "vertical",
    });
    var renderChildren = function () {
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, { index: "".concat(index, "-").concat(i) });
            }
            else {
                console.error("Warning:SubMenu only accept MenuItem as child");
            }
        });
        var subMenuClasses = classNames("mxp-submenu", {
            "menu-opened": menuOpen,
        });
        return (_jsx(Transition, __assign({ nodeRef: submenuRef, in: menuOpen, animation: "zoom-in-top", timeout: 200 }, { children: _jsx("ul", __assign({ ref: submenuRef, className: subMenuClasses }, { children: childrenComponent })) })));
    };
    var handleClick = function (e) {
        e.preventDefault();
        setMenuOpen(function (open) { return !open; });
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setMenuOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === "vertical"
        ? {
            onClick: handleClick,
        }
        : {};
    var mouseEvents = context.mode === "vertical"
        ? {}
        : {
            onMouseEnter: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            },
        };
    return (_jsxs("li", __assign({ className: classes }, mouseEvents, { children: [_jsxs("div", __assign({ className: "mxp-submenu-title", onClick: handleClick }, clickEvents, { children: [title, _jsx(Icon, { icon: "angle-down", className: "arrow-icon" })] })), renderChildren()] }), index));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
