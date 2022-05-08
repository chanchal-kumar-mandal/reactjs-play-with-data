import React, { useState } from 'react';

const TodoList = () => {
    const [title, setTitle] = useState("");
    const [list, setList] = useState([]);

    const addTodoList = () => {
        if(title === ''){
            alert('Enter your text.');
        } else {
            setList([...list, title]);
            setTitle("");
        }
    }

    const deleteFromTodoList = (index) => {
        list.splice(index, 1);
        setList([...list]);  
    }

    return(
        <>
            <h3>Todo List Data Representation</h3>
            <input type="text" placeholder="Enter your text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="button" onClick={addTodoList} style={{marginLeft: '10px', marginBottom: '1rem'}}>Add Todo</button>
            <table>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index} >
                            <td>{index + 1}</td>
                            <td>{item} </td>
                            <td><button type="button" onClick={() => deleteFromTodoList({index})}> Delete Todo</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>    
        </>
    )
}

export default TodoList;