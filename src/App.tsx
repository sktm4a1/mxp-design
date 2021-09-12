import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0}>
        <MenuItem index={0}>cool link</MenuItem>
        <MenuItem index={1}>cool link2</MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
      </Menu>
      <Button
        btnType="default"
        className="hahhahah"
        disabled={true}
        onClick={(e) => console.log(e.target)}
      >
        确定
      </Button>
    </div>
  );
}

export default App;
