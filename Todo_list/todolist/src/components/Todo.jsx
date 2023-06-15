import React, { useState } from 'react';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [text1, setText1] = useState('');

    const handleInput = (value) => {
        setText1(value);
    }

    const handleClick = () => {
        if (text1.length > 0) {
            setTasks([...tasks, { 'content': text1, 'completed': false }]);
            setText1('');
        }
    }

    const handleChange = (idx) => () => {
        const updatedTasks = tasks.map((task, index) => {
            if (index === idx) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const deleteTask = (idx) => {
        setTasks(tasks.filter((_, index) => index !== idx));
    }
    
    return (
        <div>
            <input type="text" onChange={(e) => handleInput(e.target.value)} value={text1} />
            <button onClick={handleClick}>
                Add
            </button>
            <div>
                
                
                <ul>
                    {tasks.map((item, idx) => (
                        <li key={idx}>
                            <label style={item.completed ? { textDecoration: 'line-through' } : {}}>
                                {item.content}
                            </label>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={handleChange(idx)}
                            />
                            {item.completed ? (
                                <button onClick={() => deleteTask(idx)}>
                                    Delete
                                </button>
                            ) : null}




                        </li>

                    ))}

                </ul>
            </div>
        </div>
    );
}

export default Todo;
