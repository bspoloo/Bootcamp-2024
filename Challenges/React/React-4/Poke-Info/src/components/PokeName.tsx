import { useEffect, useState } from "react";


type data = {
    idPokemon: number,
    namePokemon: string,
}

function PokeName({ idPokemon, namePokemon }: data) {
    const [id, setId] = useState(idPokemon);
    const [name, setName] = useState(namePokemon);

    useEffect(() => {
        setId(idPokemon => idPokemon)
        setName(namePokemon => namePokemon)
    }, [idPokemon, namePokemon])
    return <>
        <div>
            <p>#00{id}</p>
            <h1><b>{name}</b></h1>
        </div>
    </>
}

export default PokeName;