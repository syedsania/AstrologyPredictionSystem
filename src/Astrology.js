import React, { useState } from 'react';
import './App.css';
import { SelectSign } from './components/SelectSign';
import { SelectTimeframe } from './components/SelectTimeframe';
import Horoscope  from './components/Horoscope.js';

function Astrology() {
    const [selectedSign, setSelectedSign] = useState(null);
    const [
      selectedTimeframe, 
      setSelectedTimeframe,
    ] = useState(null);
  
    const restart = () => {
      setSelectedSign(null);
      setSelectedTimeframe(null);
    };
  
    return (
      <div className="App">
        <h1> THE HOROSCOPE APP</h1>
        {!selectedSign && (
          <SelectSign onSignSelected={setSelectedSign} />
        )}
        {selectedSign && !selectedTimeframe && (
         <SelectTimeframe 
          onTimeframeSelected={setSelectedTimeframe} 
         />
        )}
        {selectedSign && selectedTimeframe && (
          <Horoscope
            sign={selectedSign}
            timeframe={selectedTimeframe}
         />
        )}
        <br></br><br></br>
        <button onClick={restart}>Restart</button>
      </div>
    );
  }
  
  export default Astrology;