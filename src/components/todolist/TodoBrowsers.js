import React, { useEffect, useState } from "react";
import Todoitem from "./Todoitem";
import { useNavigate } from "react-router-dom";

export default function TodoBrowser() {

    const todosDb = [
        {
            id: 5,
            name: "Todo 1",
            description: "Description 1",
            done: false
            
        },
        {
            id: 8,
            name: "Todo 2",
            description: "Description 2",
            done: true
            
        },
        {
            id: 3,
            name: "Todo 3",
            description: "Description 3",
            done: false
            
        }
    ]
    
    const [todos, setTodos] = useState([])
    const navigate = useNavigate();

    function removeTodo (id) {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(newTodos);
    }

    function editTodo (id) {
        navigate(`/todolist/edit/${id}`)
    }

    useEffect(() => {
        setTodos(todosDb);
    }, []);

    return (
        <div className="TodoBrowser container card">
            <div className="text-center pt-3">
                <h1>Todo listo app</h1>
            </div>    
            {
                todos.map((todo, index) => {
                   return <Todoitem key={todo.id} data={todo} remove={removeTodo} edit={editTodo}/>
                })
            }
        </div>
    );
}