import "./App.css";
import { useState } from "react";
import Dog from "./assets/Dog.png";
import big__dog__hat__1 from "./assets/big__dog__hat__1.png";
import big__dog__hat__2 from "./assets/big__dog__hat__2.png";
import big__dog__hat__3 from "./assets/big__dog__hat__3.png";

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [src, setSrc] = useState(Dog);
  const updateCount = () => setCount(count + multiplier);
  const bork = () => {
    if (count >= 10 && multiplier == 1) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
      setSrc(big__dog__hat__1);
    }
  };
  const zoomie = () => {
    if (count >= 100 && multiplier == 2) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
      setSrc(big__dog__hat__2);
    }
  };
  const power = () => {
    if (count >= 1000 && multiplier == 10) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
      setSrc(big__dog__hat__3);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <h1 className="title">
          <b>Puppy Cloner!</b>
        </h1>
        <h2 className="title">Puppy Value: {count}</h2>
        <img
          src={src}
          alt="Large puppy."
          className="puppy"
          onClick={updateCount}
        />
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Loud Bork!</h3>
          <p>Increases your Puppy Value by 1!</p>
          <button className="button" onClick={bork}>
            10 Pups
          </button>
        </div>
        <div className="upgrade">
          <h3>Zoomies!</h3>
          <p>Increases you Puppy Value by 5!</p>
          <button className="button" onClick={zoomie}>
            100 Pups
          </button>
        </div>
        <div className="upgrade">
          <h3>Puppy Power!</h3>
          <p>Increases your Puppy Value by 10 Puppies!</p>
          <button className="button" onClick={power}>
            1000 Pups
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
