import React, { useState } from 'react';

const Child = (props) => {
    const [title, setTitle] = useState("");
    
    return (
        <div className="border-box">
            <h4>Child Component</h4>
            <input type="text" placeholder="Enter your data" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="button" onClick={() => props.childToParent(title)} style={{marginLeft: '10px'}}>Send</button>
        </div>
    )
}

export default Child;