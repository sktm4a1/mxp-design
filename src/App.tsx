import { useState } from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import VirtualList from "./components/VirtualList/virtualList";
import Icon from "./components/Icon/icon";
import Input from "./components/Input";
library.add(fas); // 引入所有图标

export default function App() {
  const genVirtualDatas = (length: number) =>
    Array.from({ length }, (v, key) => ({ value: ++key }));
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
      <VirtualList data={genVirtualDatas(100)} />
    </div>
  );
}
