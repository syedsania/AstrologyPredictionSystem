import React, { useState, useEffect } from 'react';
import { getHoroscope } from '../services/Api.js';

const Horoscope = ({ sign, timeframe }) => {
    const [horoscope, setHoroscope] = useState([]);
    
    useEffect(() => {
        getHoroscope(sign, timeframe).then(setHoroscope);
    }, [sign, timeframe]
    );

    return (
        <div>
            <h2>Horoscope for {sign} for {timeframe}</h2>
            <p><b>{timeframe}  - {sign}:</b>
                You may have found yourself wrestling with conflicting emotions yesterday, {sign}. It's possible that certain situations or relationships brought up feelings of frustration or uncertainty. Remember to trust in your instincts and take time to reflect on what truly matters to you. Use any challenges as opportunities for growth and self-discovery.
                <br></br><br></br>
                {timeframe} is filled with creative energy and inspiration for you, {sign}. You may feel a strong urge to express yourself in new and exciting ways. Trust in your intuition and don't be afraid to pursue your passions with enthusiasm. This is a great time to embark on creative projects or explore new avenues of self-expression.
                <br></br><br></br>
                {timeframe}, you may find yourself focusing on your personal relationships and connections, {sign}. It's a good time to nurture your bonds with loved ones and create a supportive and harmonious environment. Trust in the power of communication and compromise to strengthen your relationships. Remember to express your appreciation for those who uplift and support you.
            </p>
        </div>
    );
};

export default Horoscope;

