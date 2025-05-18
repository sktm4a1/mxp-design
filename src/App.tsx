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

const genVirtualData = (length: number) =>
  Array.from({ length }, (v, key) => ({ value: ++key }));

export default function App() {
  const [inputVal, setInputVal] = useState<string>();

  return (
    <div className="App" data-testid="app">
      <Menu mode="horizontal">
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            dropdown 1<Icon icon={"coffee"} theme="danger" />
          </MenuItem>
          <MenuItem>
            dropdown 2<Icon icon="user-secret" theme="primary" />
          </MenuItem>
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
      <Input
        prepend={"http://"}
        append={".com"}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        style={{ width: 300 }}
        defaultValue={"www.baidu"}
      />
      <VirtualList data={genVirtualData(100)} />
    </div>
  );
}
