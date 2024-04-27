import React, { useEffect, useState } from 'react';
import { getSigns } from '../services/Api.js';
import './styles.css'; 

export const SelectSign = ({ onSignSelected }) => {
    const [signs, setSigns] = useState([]);

    useEffect(() => {
        getSigns().then(setSigns);
    }, []);

    return (
        <>
        <h2>please select a sign</h2>
        <div className="grid">
            {signs.map((sign) => (
            <button 
                className="sign" 
                key={sign} 
                onClick={() => onSignSelected(sign)}
            >
                 <img src={`/${sign}.jpeg`} alt={sign} />
            </button>
            ))}
      </div>
      </>
    );
};