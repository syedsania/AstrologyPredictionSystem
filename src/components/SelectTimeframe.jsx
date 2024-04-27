import React from 'react';
import './styles.css'; 

export const SelectTimeframe = ({
    onTimeframeSelected,
}) => {
    return(
        <>
        <h2>please select a Time Frame</h2>
        <div className="grid">
            {['Yesterday','Today','Tomorrow'].map(
               (timeframe) => (
                <button 
                    className="timeframe" 
                    key={timeframe} 
                    onClick={() =>
                        onTimeframeSelected(timeframe)
                    }
                >
                    {timeframe}
                </button>
            ))}
      </div>
      </>
    )

}