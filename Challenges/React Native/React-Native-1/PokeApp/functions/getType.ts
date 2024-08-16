import { useEffect, useState } from "react";

const url = 'https://pokeapi.co/api/v2/pokemon/'

function getData(id: number) {
    return fetch(url + id)
        .then(response => response.json())
        .then(data => data)
}

function getType(id: number): string{
    const [type, setType] = useState('');
    useEffect(() => {
        getData(id)
            .then(pokemon => {
                setType(pokemon?.types?.[0]?.type?.name);
                // console.log(pokemon);
            })
    }, [id])
    return type
}

export default getType;