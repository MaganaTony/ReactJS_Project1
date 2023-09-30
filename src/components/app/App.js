import React, { createContext, useState } from "react";
import PokemonBrowser from "../pokemon/PokemonBrowser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from "../hello/Hello";
import Pokemon from "../../pages/pokemon/Pokemon";
import SearchPokemon from "../../pages/pokemon/SearchPokemon";
import MainLayout from "../../pages/layouts/MainLayout";
import Todolist from "../../pages/todolist/Todolist";
import TodoEdit from "../../pages/todolist/TodoEdit";

export const AppContext = createContext();

export default function App() {
const todosDb = [
        {
            id: 5,
            name: "Tarea numero 1",
            description: "Description de tarea numero 1",
            done: false
        },
        {
            id: 8,
            name: "Esta es la tarea numero 2",
            description: "Description de tarea numero 2",
            done: true
        },
        {
            id: 3,
            name: "Aun esta es la tarea numero 3",
            description: "Description de tarea numero 3",
            done: false
        }
    ];

    const [todos, setTodos] = useState(todosDb);

    return(
   <AppContext.Provider value={{todos, setTodos}}>
         <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Todolist/>}/>
            </Route>
            <Route path="/pokemon" element={<MainLayout />}>
                <Route path=":name" element={<SearchPokemon />}/>
            </Route>
            <Route path="/todolist/edit" element={<MainLayout />}>
                <Route path=":id" element={<TodoEdit />}/>
            </Route>
        </Routes>
        </BrowserRouter>
   </AppContext.Provider>
    );

    
    // return (
    //     <div className="App">
    //         <PokemonBrowser/>
    //     </div>
    // );
}

//  export const App() => {
//     return (
//         <div className="App">
//             <h1>Hello, world!</h1>
//         </div>
//     );
// }