import { useEffect, useState } from "react";

const url = 'https://pokeapi.co/api/v2/pokemon/'

function getData(id: number) {
    return fetch(url + id)
        .then(response => response.json())
        .then(data => data)
}

function usePokemon(id: number): { pokemon: any, image: string } {
    const [pokemon, setPokemon] = useState(null);
    const [image, setImage] = useState('');
    useEffect(() => {
        getData(id)
            .then(pokemon => {
                setPokemon(pokemon);
                console.log(pokemon);
            })
            .then(() => {
                    const realId = `00${id}`.slice(-3);
                    setImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`) 
                }
            )
    }, [id])
    return { pokemon, image}
}

export default usePokemon;