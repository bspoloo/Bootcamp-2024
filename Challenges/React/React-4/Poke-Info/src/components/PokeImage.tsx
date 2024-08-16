import { useEffect, useState } from "react";

type data = {
    imageData: string,
    nameData: string
}

function PokeImage({ imageData, nameData }: data) {

    const [image] = useState(imageData)
    const [name] = useState(nameData)

    useEffect(() => {
    }, [imageData, nameData])

    return <>
        <div className="logo">
            <img src={image} alt={name} />
        </div>
    </>
}

export default PokeImage;