import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/Icon/icon";
library.add(fas);

export default function App() {
  return (
    <div className="App" data-testid="app">
      <Icon icon="arrow-down" theme="danger" size="10x" />
      <Menu mode="vertical" defaultOpenSubMenus={["2"]}>
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>
      <Button
        btnType="primary"
        className="hahhahah"
        disabled={false}
        onClick={(e) => console.log(e.target)}
      >
        确定
      </Button>
    </div>
  );
}
