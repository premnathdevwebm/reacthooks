import { useState, useCallback } from "react";
import "./App.css";
import Combinations from "./components/Combinations";
import Shelf from "./components/Shelf";

function App() {
  const [bookCount, setBookCount] = useState(2);
  const [selfName, setSelfName] = useState("");
  const [selfSpace, setSelfSpace] = useState("");

  const handleBookCountChange = (event) => {
    setBookCount(parseInt(event.target.value));
  };

  const handleShelfNameChange = (event) => {
    setSelfName(event.target.value);
  };

  const checkStorage = useCallback((space)=>{
    setSelfSpace(space)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Library</p>
      </header>
      <form>
        <div>
          <input
            type="text"
            value={selfName}
            onChange={handleShelfNameChange}
          />
          <label>
            <Shelf shelfName={selfName} />
          </label>
        </div>
        <div>
          <input
            type="number"
            value={bookCount}
            onChange={handleBookCountChange}
          />
          <label>
            {bookCount > 0 && (
              <Combinations checkSpace={checkStorage} countBooks={bookCount ?? 0} />
            )}
          </label>
        </div>
      </form>
      {selfSpace && <>{selfSpace} in {selfName}</>}
    </div>
  );
}

export default App;
