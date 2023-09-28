import React from "react";

import "./Pokemon.css";

export default function Pokemon(props){
    return (
        <div className="pokemon">
            <h1>Pokemon</h1>
            <span>{props.id}</span>
            <p>Name: {props.name}</p>
            <p>Type: {props.type}</p>
            <img src={props.sprite} alt={props.name}></img>
        </div>
    );
}