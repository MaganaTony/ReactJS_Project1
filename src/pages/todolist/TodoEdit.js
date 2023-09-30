import React, { useContext, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../components/app/App";

export default function TodoEdit() {
    const { id } = useParams();

    const { todos, setTodos } = useContext(AppContext);

    const [activeTodo, setActiveTodo] = useState({});
    useEffect(() => {
        const newTodo = todos.find((todo) => {
            return todo.id === Number(id)
        });
        
        setActiveTodo(newTodo);
    }, [id]);

    return (
        <div className="TodoEdit">
            {
                activeTodo.name ? (
                    <div className="container card">
                        <Link to={`/`}>Back to Todo List</Link>
                        <h1>Task #{activeTodo.id} - {activeTodo.name}</h1>
                        <p>{activeTodo.description}</p>
                        <p>Status: {activeTodo.done ? 'Done' : 'Pending'}</p>
                    </div>
                ) : ('Loading...')
            }
        </div>
    )
}