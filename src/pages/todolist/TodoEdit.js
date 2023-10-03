import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from "../../store/actions/todoActions";

import { Link, useNavigate, useParams } from "react-router-dom";

export default function TodoEdit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const todos = useSelector((state) => state.todoReducer.todos);

    const [activeTodo, setActiveTodo] = useState({});

    const todoNameInput = useRef(null);
    const todoDescriptionInput = useRef(null);
    const todoDoneCheckbox = useRef(null);

    function finishEdit() {
        const editedTodo = {
            id: Number(id),
            name: todoNameInput.current.value,
            description: todoDescriptionInput.current.value,
            done: todoDoneCheckbox.current.checked
        };

        dispatch({
            type: actionType.EDIT_TODO,
            payload: editedTodo
        });

        navigate(`/`);
        }

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
                        <h4>Task #{id}</h4>
                        <div className="form-group">
                            <label htmlFor="todoName">Name</label>
                            <input ref={todoNameInput} type="text" className="form-control" id="todoName" defaultValue={activeTodo.name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="todoDescription">Description</label>
                            <textarea ref={todoDescriptionInput} className="form-control" id="todoDescription" defaultValue={activeTodo.description}/>
                        </div>
                        <div className="form-group form-check">
                            <input ref={todoDoneCheckbox} type="checkbox" className="form-check-input" id="todoDone" defaultChecked={activeTodo.done}/>
                            <label className="form-check-label" htmlFor="todoDone">Done</label>
                        </div>
                        <button className="btn btn-primary w-25 my-4 text-right" onClick={() => finishEdit()}>Finish Edit</button>
                    </div>
                ) : ('Loading...')
            }
        </div>
    )
}