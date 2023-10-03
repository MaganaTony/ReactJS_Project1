import todoReducer from "./reducers/todoReducer";
import { combineReducers, createStore } from "redux";


export const rootReducer = combineReducers({
    todoReducer
});

export const store = createStore(rootReducer);
