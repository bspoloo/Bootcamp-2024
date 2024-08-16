import PokeName from "./PokeName";
import PokeElement from "./PokeElement";
import PokeImage from "./PokeImage";
import getColor from "../functions/getColor";
import { useEffect, useRef } from "react";

type Pokemon = {
    id: number,
    name: string,
    element: string,
    imageElement: string
    imagePokemon: string
};

function Card({ id, name, element, imageElement, imagePokemon }: Pokemon) {

    const {color} = getColor(element);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current) {
            cardRef.current.style.backgroundColor = color;
        }
    }, [color]);

    return <>
        <div className="card" ref={cardRef}>
            <div className="data">
                <PokeName idPokemon={id} namePokemon={name} />
                <PokeElement imageElement={imageElement} elementPokemon={element} />
            </div>
            <PokeImage imageData={imagePokemon} nameData={name} />
        </div>
    </>

}

export default Card;