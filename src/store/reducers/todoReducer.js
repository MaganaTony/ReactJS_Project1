import * as actionTypes from '../actions/todoActions';

const initialState = {
    todos: [
        {
            id: 0,
            name: "Tarea numero 1",
            description: "Description de tarea numero 1",
            done: false
        },
        {
            id: 1,
            name: "Esta es la tarea numero 2",
            description: "Description de tarea numero 2",
            done: true
        },
        {
            id: 2,
            name: "Aun esta es la tarea numero 3",
            description: "Description de tarea numero 3",
            done: false
        }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== Number(action.payload.id))
            };
        case actionTypes.EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === Number(action.payload.id) ? action.payload : todo),
            };
        default:
            return state;
    }
}

export default todoReducer;