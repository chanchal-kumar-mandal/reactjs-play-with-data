import React, { useState } from 'react';

const CountData = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h3>Count Data Representation</h3>
            <p><strong>Count is: </strong>{count}</p>
            <button type="button" onClick={() => setCount(count + 1)} style={{marginRight: '1rem'}}>Increase +</button>
            <button type="button" onClick={() => setCount(count - 1)}>Decrease -</button>
        </>
    )
}

export default CountData;