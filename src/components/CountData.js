import React, { useState, useEffect } from 'react';

const CountData = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const toggleTimer = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        let countInterval = null;
        
        if (isActive) {
          countInterval = setInterval(() => {
            setSeconds( seconds => seconds + 1);
          }, 1000);
        } 
        
        if (!isActive) {
          clearInterval(countInterval);
        }
        
        return (() => clearInterval(countInterval));
    }, [isActive])

    const resetTimer = () => {
        setSeconds(0);
        setIsActive(false);
    };

    return (
        <>
            <div className="border-box">
                <h3>Count Data Representation</h3>
                <p><strong>Count is: </strong>{count}</p>
                <button type="button" onClick={() => setCount(count + 1)} style={{marginRight: '1rem'}}>Increase +</button>
                <button type="button" onClick={() => setCount(count - 1)}>Decrease -</button>
            </div>
            <div className="border-box">
                <h3>Self Increasing Seconds</h3>
                <p><strong>Seconds: </strong>{seconds}</p>
                <button className="button is-danger is-small" onClick={resetTimer} style={{marginRight: "10px"}}>RESET</button>
                <button className={`button is-${isActive ? 'warning' : 'info'} is-small`} onClick={toggleTimer}>
                { isActive ? "PAUSE" : "START" }
                </button>
            </div>
        </>
    )
}

export default CountData;