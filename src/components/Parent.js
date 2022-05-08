import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [data, setData] = useState("");

    const childToParent = (childData) => {
        if(childData === ""){
            alert("Enter your data.")
        } else {
            setData(childData);
        }
    }

    return (
        <>
            <h3>Child To Parent Data Representation</h3>
            <div className="border-box">
                <h4>Parent Component</h4>
                <span>Child data in parent: </span><b>{data}</b>
            </div>
            <Child childToParent={childToParent} />
        </>
    )
}

export default Parent;