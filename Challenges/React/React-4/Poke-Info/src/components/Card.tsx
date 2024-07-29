import PokeName from "./PokeName";
import PokeElement from "./PokeElement";
import PokeImage from "./PokeImage";

type Pokemon = {
    id: number,
    name: string,
    element: string,
    imageElement: string
    imagePokemon: string
};

function Card({ id, name, element, imageElement, imagePokemon }: Pokemon) {
    return <>
        <div>
            <div>
                <PokeName idPokemon={id} namePokemon={name} />
                <PokeElement imageElement={imageElement} elementPokemon={element} />
            </div>
            <PokeImage imageData={imagePokemon} nameData={name} />
        </div>
    </>

}

export default Card;