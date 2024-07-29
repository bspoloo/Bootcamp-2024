import { useEffect, useState } from "react";

type data = {
    imageElement: string,
    elementPokemon: string
}

function PokeElement({imageElement, elementPokemon}: data){
    const [image, setImage] = useState(imageElement)
    const [element, setElement] = useState(elementPokemon)

    useEffect(()=>{
        setImage(imageElement=> imageElement)
        setElement(elementPokemon => elementPokemon)
    },[imageElement, elementPokemon]);

    return<>
    <div>
        <img src={image} alt={image} height={70} width={50}/>
        <h2>{element}</h2>
    </div>
    </>
}

export default PokeElement;