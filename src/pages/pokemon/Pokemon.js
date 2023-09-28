import React from "react";
import "/home/maganatony/ReactJS/Clase3/src/components/pokemon/Pokemon.css"
import SearchPokemon from "./SearchPokemon";
import Footer from "../../components/footer/Footer";

export default function Pokemon(props){
    return(
        <div className="pokemon">
            <h1>Pokemon</h1>
            <span>{props.id}</span>
            <p>Name: {props.name}</p>
            <p>Type: {props.type}</p>
            <img src={props.sprite} alt={props.name}></img>
        </div>
    )
}