import { useEffect, useRef, useState } from "react";
import getColor from "../functions/getColor";
import darkenColor from "../functions/darkColor";

type data = {
    imageElement: string,
    elementPokemon: string
}

function PokeElement({imageElement, elementPokemon}: data){
    const [image] = useState(imageElement)
    const [element] = useState(elementPokemon)
    const {color} = getColor(element);
    const cardRef = useRef<HTMLDivElement>(null);
    const darkColor = darkenColor(color , 50);

    useEffect(()=>{
        if (cardRef.current) {
            cardRef.current.style.backgroundColor = darkColor;
        }
    }, [color]);

    return<>
    <div className="element" ref={cardRef}>
        <img src={image} alt={image} height={40} width={30}/>
        <h2>{element}</h2>
    </div>
    </>
}

export default PokeElement;