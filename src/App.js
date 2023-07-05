import { useState, useReducer, useRef } from "react";
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
const reducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const addressRef = useRef();
  const initialState = {
    fieldState: "",
    fieldCity: "",
    fieldAddress: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { fieldState, fieldCity, fieldAddress } = state;

  const fillAddress = () => {
    dispatch({
      type: "fieldAddress",
      payload: `${fieldCity}, ${fieldState}`,
    });
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
          value={fieldState}
          style={fieldStyle}
          onChange={(e) =>
            dispatch({
              type: "fieldState",
              payload: e.target.value,
            })
          }
        />
        <input
          placeholder="City"
          value={fieldCity}
          style={fieldStyle}
          onChange={(e) => dispatch({
            type: "fieldCity",
            payload: e.target.value,
          })}
        />
        <button style={buttonStyle} onClick={fillAddress}>
          Fill Address
        </button>
        <textarea
          style={fieldStyle}
          ref={addressRef}
          value={fieldAddress}
          placeholder="Address"
          onChange={(e) => dispatch({
            type: "fieldAddress",
            payload: e.target.value,
          })}
        />
      </div>
    </div>
  );
}

export default App;
