import { useContext, useRef } from "react";
import "./App.css";
import Menu from "./components/Menu";
import {FoodOrderContext} from "./store/foodorder-context";
function App() {
  const {isOpen, setIsOpen} = useContext(FoodOrderContext);
  const btnText = useRef("Open");
  const toggler = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      btnText.current = "Close";
    } else {
      btnText.current = "Open";
    }
  };

  return (
    <div className="App">
      <button ref={btnText} onClick={toggler}>
        {btnText.current}
      </button>
      <header className="App-header">
        <p>Food Shop</p>
      </header>
      <Menu  />
    </div>
  );
}

export default App;
