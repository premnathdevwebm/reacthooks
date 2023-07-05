import { useState, useRef } from "react";
import Timer from "./components/Timer";
import "./App.css";
const fieldStyle = {
  marginTop: "20px",
  float: "left",
  width: "70%",
  Fantasy: 20,
};
const buttonStyle = {
  marginTop: "20px",
  backgroundColor: "lightBlue",
  width: "30%",
  fontSize: 20,
  cursor: "pointer",
};
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const addressRef = useRef();

  const handleInputChange = (setInput, event) => {
    setInput(event.target.value);
  };

  const cursSelector = () => {
    setAddress(`${city}, ${state}`);
    addressRef.current.focus();
  };

  const toggler = () => setIsOpen((prev) => !prev);
  return (
    <div className="App">
      <button onClick={toggler}>Toogle</button>
      <header className="App-header">
        <p>Timer</p>
      </header>
      {isOpen && <Timer isOpen={isOpen} />}
      {!isOpen && (
        <>
          <p>Timer is closed</p>
        </>
      )}
      <div style={{ width: "100%" }}>
        <input
          placeholder="State"
          autoFocus
          value={state}
          style={fieldStyle}
          onChange={(e) => handleInputChange(setState, e)}
        />
        <input
          placeholder="City"
          value={city}
          style={fieldStyle}
          onChange={(e) => handleInputChange(setCity, e)}
        />
        <button style={buttonStyle} onClick={cursSelector}>
          Fill Address
        </button>
        <textarea
          style={fieldStyle}
          ref={addressRef}
          value={address}
          placeholder="Address"
          onChange={(e) => handleInputChange(setAddress, e)}
        />
      </div>
    </div>
  );
}

export default App;
