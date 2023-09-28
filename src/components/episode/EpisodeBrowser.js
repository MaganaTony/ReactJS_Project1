import React, { useEffect, useState } from "react";
import Episode from "./Episode";

export default function EpisodeBrowser() {
    const episodesDb = [
        {
            name: "Winter Is Coming",
            episode: 1,
            cover: "https://imgs.search.brave.com/6zQy2S4ylSNWNY2SDYbuAxOPbXG5tnez8XQePFRuOw8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Y5/OWRiNjI2MjAyOTc3/MmZlYTdlYTg3YjMw/MTA1NzQzN2M0ODQ0/M2QvaHViLzIwMTkv/MDUvMjAvNzgxNmY0/MTYtYjFlMy00ODgx/LTg1MTEtYTA2MTQw/YzM1NmE0L2dhbWUt/b2YtdGhyb25lcy1z/ZWFzb24tOC1lcGlz/b2RlLTYtZGFlbmVy/eXMtdGhyb25lLmpw/Zz9hdXRvPXdlYnAm/d2lkdGg9MTIwMA"
        },
        {
            name: "The Kingsroad",
            episode: 2,
            cover: "https://imgs.search.brave.com/ftpigRF2Xq8MuGbcshyn38svTdUA5kKpk_pKKG-i0eQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1Lzli/LzNiLzc1OWIzYjBh/ZGYwNmU1MjM5NGUw/YmJkNDUwYTZiMjhh/LmpwZw"
        },
        {
            name: "Lord Snow",
            episode: 3,
            cover: "https://imgs.search.brave.com/ZzNZtOrfkU-zS8KRV-lTwIz2bWy7_57eYT_cVMn3QXY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yZXNp/emluZy5mbGl4c3Rl/ci5jb20vdEV1QzZ1/ZThJTEFWYWxPWnNX/eVdWaXQ4ZHJZPS8z/MDB4MzAwL3YyL2h0/dHBzOi8vcmVzaXpp/bmcuZmxpeHN0ZXIu/Y29tL2F0cTAtSXdH/ZkpYU241dnJkRUpn/QWtaMnUxVT0vZW1z/LmNISmtMV1Z0Y3kx/aGMzTmxkSE12ZEha/elpYSnBaWE12VWxS/TlZVeFVTVlZUUlRJ/eU5UQTNNRE11ZDJW/aWNBPT0"
        },
    ];


    const [episode, setEpisode] = useState(0); // Un contador que inicia en 0
    const [episodes, setEpisodes] = useState([]);
    const [activeEpisode, setActiveEpisode] = useState(episodes[0]); // Lo que este en la posicion 0

    useEffect(() => {
        console.log("Render");
        setEpisodes(episodesDb)
    }, []);

    useEffect(() => {
        setActiveEpisode(episodes[episode]);
    },[episode, episodes]);

    function nextEpisode() {
        if(episode > episodes.length -1){ // Si el contador es menos a la longitud del arreglo no regresa nada
            alert("No more episode")
            return
        }
        setEpisode(episode + 1); //Contador se le suma 1
    }

    function previousEpisode() {
        if (episode == 0) {
            alert("No more episodes") // Si el contador es 0 entonces no regresa nada
            return
        }
        setEpisode(episode - 1); //Contador se le resta 1
    }



    return (
        <div className="EpisodeBrowser">
            {
                episodes.length > 0 ? (
                    <div>
                      <h1>Episode Browser</h1>
                      {
                        activeEpisode ? (
                            <Episode name={activeEpisode.name} episode={activeEpisode.episode} cover={activeEpisode.cover} />
                        ): (
                            <p>No episode selected</p>
                        )
                      }
                      <button onClick={previousEpisode}>Previous</button>
                      <button onClick={nextEpisode}>Next</button>
                    </div>
                ): (<p>Loading...</p>)
            }
        </div>
    );
}