import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import { useParams } from "react-router-dom";

export default function SearchPokemon() {

    const [activePokemon, setActivePokemon] = useState({}); // Lo que este en la posicion 0

    const { name } = useParams();

    console.log(name);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            const pokemon = {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                type: data.types.map(type => type.type.name)
            }

            console.log(pokemon);

            setActivePokemon(pokemon)
        })
        .catch(error => {
            alert("Pokemon not found")
        });
    }, [name])

    return (
        <>
        <Pokemon name={activePokemon.name} id={activePokemon.id} sprite={activePokemon.sprite} />
        </>
        
    )
}