import React, { useContext, useEffect, useState } from "react";
import Todoitem from "./Todoitem";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../app/App";

export default function TodoBrowser() {    
    const { todos, setTodos } = useContext(AppContext);
    const navigate = useNavigate();

    function removeTodo (id) {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(newTodos);
    }
    
    function editTodo (id) {
        // Redirect to edit page
        navigate(`/todolist/edit/${id}`)
    }

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