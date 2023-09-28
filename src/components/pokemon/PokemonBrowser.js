import React, { useEffect, useRef, useState } from "react";

import Pokemon from "./Pokemon";

export default function PokemonBrowser() {

    const [pokemon, setPokemon] = useState(0); // Un contador que inicia en 0
    const [pokemons, setPokemons] = useState([]);
    const [activePokemon, setActivePokemon] = useState({}); // Lo que este en la posicion 0

    const pkmnName = useRef(null);

    useEffect(() => {

        const pokemonsNames= ["bulbasaur","charmander","squirtle","pikachu"];

        async function getPokemonData(){
            const pokemons = pokemonsNames.map(async (pokemonName) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                const data = await response.json();
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.front_default,
                    type: data.types.map(type => type.type.name)
                }
                console.log("Getting pokemon", pokemon.name);

                return pokemon;
            });
            setPokemons(await Promise.all(pokemons))
        }

        getPokemonData();

    }, []);

    function nextPokemon() {
        if(pokemon > pokemons.length -1){ // Si el contador es menos a la longitud del arreglo no regresa nada
            alert("No more pokemons")
            return
        }
        setPokemon(pokemon + 1); //Contador se le suma 1
    }

    function previousPokemon() {
        if (pokemon == 0) {
            alert("No more episodes") // Si el contador es 0 entonces no regresa nada
            return
        }
        setPokemon(pokemon - 1); //Contador se le resta 1
    }

function searchPokemon (event){
    event.preventDefault()
    const pokemonName = pkmnName.current.toLowerCase();

    const pokemon = pokemons.find(pokemon => pokemon.name === pokemonName)
    if (pokemon) {
        console.log(pokemons);
        setActivePokemon(pokemon)
        return;
    } else {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const pokemon = {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                type: data.types.map(type => type.type.name)
            }

            setPokemons([...pokemons, pokemon])
            console.log(pokemons);

            setActivePokemon(pokemon)
        })
        .catch(error => {
            alert("Pokemon not found")
        });
    }

}

// function insertPokemon (event){
//     event.preventDefault()

//     const pokemonId = Number(document.getElementById("pokemonId").value);
//     const pokemonName = document.getElementById("pokemonName").value;
//     const pokemonSprite = document.getElementById("pokemonSprite").value;

//     const newPokemon = {
//         id: pokemonId,
//         name: pokemonName,
//         sprite: pokemonSprite
//     }
    
//     setPokemons([...pokemons, newPokemon])
//     console.log(pokemons);
// }

    return (
        <div className="PokemonBrowser">
            {
                pokemons.length > 0 ? (
                    <div>
                      <h1>Pokemon Browser</h1>
                      <form onSubmit={searchPokemon}>
                        <input ref={pkmnName} type="text" placeholder="Ingresa nombre de Pokemon"></input>
                        <button type="submit">Buscar pokemon</button>
                      </form>
                      {/* <form onSubmit={insertPokemon}>
                        <input id="pokemonId" type="text" placeholder="Ingresa Pokemon ID"></input>
                        <input id="pokemonName" type="text" placeholder="Ingresa nombre de Pokemon" onFocus={() => console.log("Focus")}></input>
                        <input id="pokemonSprite" type="text" placeholder="Ingresa sprite de Pokemon"></input>
                        <button type="submit">Insertar Pokemon</button>
                      </form> */}
                      {
                        activePokemon.name ? (
                            <Pokemon name={activePokemon.name} id={activePokemon.id} sprite={activePokemon.sprite} type={activePokemon.type.join(" & ")}/>
                        ): (
                            <p>No pokemon selected</p>
                        )
                      }
                    </div>
                ): (<p>Loading...</p>)
            }
        </div>
    );
}