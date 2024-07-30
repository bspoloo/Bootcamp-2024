import {useState } from "react";

type data = {
    idPokemon: number,
    namePokemon: string,
}

function PokeName({ idPokemon, namePokemon }: data) {
    const [id] = useState(idPokemon);
    const [name] = useState(namePokemon);

    return <>
        <div className="name">
            <p>#00{id}</p>
            <h1><b>{name}</b></h1>
        </div>
    </>
}

export default PokeName;