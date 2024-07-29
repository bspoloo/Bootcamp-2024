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
    <div className="element">
        <img src={image} alt={image} height={40} width={30}/>
        <h2>{element}</h2>
    </div>
    </>
}

export default PokeElement;