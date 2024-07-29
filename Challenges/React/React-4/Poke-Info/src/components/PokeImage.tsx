import { useEffect, useState } from "react";

type data = {
    imageData: string,
    nameData: string
}

function PokeImage({ imageData, nameData }: data) {

    const [image, setImage] = useState(imageData)
    const [name, setName] = useState(nameData)

    useEffect(() => {
        setImage(imageData => imageData);
        setName(nameData => nameData);
    }, [imageData, nameData])

    return <>
        <div>
            <img src={image} alt={name} />
        </div>
    </>
}

export default PokeImage;