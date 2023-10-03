import React, { useContext, useEffect, useState } from "react";
import Todoitem from "./Todoitem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./CreateTodo";
import * as todoActions from "../../store/actions/todoActions";

export default function TodoBrowser() {    
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoReducer.todos)

    const navigate = useNavigate();

    function removeTodo (id) {
        dispatch({
            type: todoActions.REMOVE_TODO,
            payload: {
                id
            }
        })
    }
    
    function editTodo (id) {
        // Redirect to edit page
        navigate(`/todolist/edit/${id}`)
    }

    return (
        <div className="TodoBrowser container card">
            <div className="text-center pt-3">
                <h1>Todo listo app</h1>
                <CreateTodo/>
            </div>    
            {
                todos.map((todo, index) => {
                   return <Todoitem key={todo.id} data={todo} remove={removeTodo} edit={editTodo}/>
                })
            }
        </div>
    );
}