import './ButtonToDo.css';
import { useState, useEffect } from 'react';

export const ButtonToDo = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const storedTasks = JSON.parse(localStorage.getItem('taskList'));

    useEffect(() => {
        if (storedTasks) {
            setTaskList(storedTasks);
        }
    }, []);

    useEffect(() => {
            localStorage.setItem('taskList', JSON.stringify(taskList))
    }, [taskList])

    const addTask = () => {
        if (task !== '') {
            setTaskList([...taskList, task]);
            setTask('');
        }
    }
    const delTask = (index) => {
        if (taskList.length) {
            setTaskList(taskList.filter((_, i) => i !== index));
        }
    }
    return (
        <section >
            <input type="text"
                onChange={(event) => {
                    setTask(event.target.value)
                    if (task === '') {
                        event.target.value = ''
                    }
                }}
            />
            <button onClick={addTask} className='add-task'>Add</button>
            <ol>
                {taskList.map((taskItem, index) => (
                    <li key={index}>{taskItem}
                        <button type="button" className='btn-delete' onClick={() => delTask(index)}>delete</button>
                    </li>
                ))}
            </ol>
        </section>
    )
}