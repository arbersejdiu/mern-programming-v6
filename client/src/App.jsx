import { useState } from "react";
import "./App.css";

const App = () => {
  const [x, setx] = useState(0);

  const btnClick = () => {
    console.log("button clicked");
    setx(x + 1);
    console.log(x);
  };
  const btnClickMinus = () => {
    console.log("button clicked");
    setx(x - 1);
    console.log(x);
  };
  return (
    <div>
      <button
        onClick={() => {
          btnClickMinus();
        }}>
        -
      </button>
      {x}

      <button
        onClick={() => {
          btnClick();
        }}>
        +
      </button>
    </div>
  );
};

export default App;
