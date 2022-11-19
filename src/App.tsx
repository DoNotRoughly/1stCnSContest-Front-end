import React from "react";
import Button from "./component/button";
import "./App.css";

function App() {
  const alarm = () => {
    alert("Bye~");
  };

  return (
    <div>
      <Button width={100} onClick={alarm}>
        <div>This is Button</div>
      </Button>
    </div>
  );
}

export default App;
