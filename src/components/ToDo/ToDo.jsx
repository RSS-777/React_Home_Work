import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, changeTodo } from "../../store/todo/actions";
import { v4 as uuidv4 } from 'uuid';
import { useTodoSelector } from "../../store/todo/selectors";

export const ToDo = () => {
    const [value, setValue] = useState('');
    const todoList = useTodoSelector();
    const dispatch = useDispatch();

    const onAdd = () => {
        const action = addTodo({ id: uuidv4(), value, completed: false });
        dispatch(action);
    };

    const onDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const onChange = (id) => (e) => {
        dispatch(changeTodo(id, e.target.checked)); 
    };

    return (
        <section>
            <h2>ToDo list</h2>
            <h1>Home</h1>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={onAdd}>Add</button>
            <div>
                {todoList.map((todo) => (
                    <div key={todo.id}>
                        {todo.value}
                        <input
                            type="checkbox"
                            defaultChecked={todo.completed}
                            onChange={onChange(todo.id)}
                        />
                        <button onClick={() => onDelete(todo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </section>
    );
};