import React, { useState } from 'react';

const StaticData = () => {

    const people = [
        { name: 'Alan Turing', role: 'Designer', id: 1 },
        { name: 'Ada Lovelace', role: 'Developer', id: 2 },
        { name: 'Barbara Liskov', role: 'Manager', id: 3 },
        { name: 'Mary Poppendieck', role: 'Director', id: 4 }
    ];
    
    const[ searched, setSearched ] = useState("");

    const handleSearch = (keyword) => {
        setSearched(keyword);
    }

    return (
        <>
            <h3>Static Data Representation</h3>
            <input type="text" name="search" placeholder="Search by name..." value={searched} onChange={(e) => handleSearch(e.target.value)} />
            {people
            .filter( (item) => item.name.toLowerCase().includes( searched.toLowerCase() ) )
            .map( (man) => (
                <p key={man.id}><b>Id:</b> {man.id} <b>Name:</b> {man.name} <b>Role:</b> {man.role} </p>
            ))}

        </>
    )
}

export default StaticData
