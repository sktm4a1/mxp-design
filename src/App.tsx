import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import VirtualList from "./components/VirtualList/virtualList";
library.add(fas);

export default function App() {
  let virtualDatas = [];
  for (let i = 0; i < 10000; i++) {
    virtualDatas.push({ value: i + 1 });
  }
  return (
    <div className="App" data-testid="app">
      <Menu mode="horizontal">
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
      <VirtualList data={virtualDatas} />
    </div>
  );
}
