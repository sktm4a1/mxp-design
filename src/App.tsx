import React from "react";
import Button from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button
        btnType="primary"
        className="hahhahah"
        onClick={(e) => console.log(e.target)}
      >
        确定
      </Button>
    </div>
  );
}

export default App;
