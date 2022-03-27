import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

export default function App() {
  return (
    <div className="App" data-testid="app">
      <Menu>
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
