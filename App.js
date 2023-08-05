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
import { useState } from "react";
import VirtualList from "./components/VirtualList/virtualList";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import Input from "./components/Input";
// import { Button, Menu, Icon, Input } from "../dist";
// const MenuItem = Menu.Item, SubMenu = Menu.SubMenu;
export default function App() {
    var genVirtualDatas = function (length) {
        return Array.from({ length: length }, function (v, key) { return ({ value: ++key }); });
    };
    var _a = useState(), inputVal = _a[0], setInputVal = _a[1];
    return (_jsxs("div", __assign({ className: "App", "data-testid": "app" }, { children: [_jsxs(Menu, __assign({ mode: "horizontal" }, { children: [_jsx(MenuItem, { children: "cool link" }), _jsx(MenuItem, __assign({ disabled: true }, { children: "cool link2" })), _jsxs(SubMenu, __assign({ title: "dropdown" }, { children: [_jsxs(MenuItem, { children: ["dropdown 1", _jsx(Icon, { icon: "coffee", theme: "danger" })] }), _jsxs(MenuItem, { children: ["dropdown 2", _jsx(Icon, { icon: "user-secret", theme: "primary" })] })] })), _jsx(MenuItem, { children: "cool link3" })] })), _jsx(Button, __assign({ btnType: "primary", className: "hahhahah", disabled: false, onClick: function (e) { return console.log(e.target); } }, { children: "\u786E\u5B9A" })), _jsx(Input, { prepend: "http://", append: ".com", value: inputVal, onChange: function (e) { return setInputVal(e.target.value); }, style: { width: 300 }, defaultValue: "www.baidu" }), _jsx(VirtualList, { data: genVirtualDatas(100) })] })));
}
