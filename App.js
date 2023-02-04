import { useState } from "react";
import "./styles.css"
function App() {

  const [numMin, setNumMin] = useState('0')
  const [numMax, setNumMax] = useState('10')
  const [randomNum, setRandomNum] = useState('7')

  const giveRandomNumber = () =>{
    setRandomNum(Math.floor(Math.random()*(numMax-numMin +1)+numMin ))
  }


  return (
    <div className="hero">  
      <div className="container">

        <div className="randomnum">
          <p>Random Number <span> {randomNum}</span></p>
        </div>

        <div className="numContainer">

          <div>
          <p>Min:</p>
          <input type="number"
          value={numMin}
          onChange={(e)=> setNumMin(+ e.target.value)}
          
          />
          </div>

          <div>
            <p>Max:</p>
            <input type="number"
            value={numMax}
            onChange={(e) => setNumMax(+ e.target.value)}
            
            />
          </div>

        </div>

        <button onClick={giveRandomNumber}>Get Random Number</button>

      </div>
    </div>
  );
  }
export default App;
