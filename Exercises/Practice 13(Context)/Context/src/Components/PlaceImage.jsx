import { useContext } from "react";
import {getImageUrl} from "../utils";
import imageSizeContext from "../Context/context";

function PlaceImage({ place }) {
  const imageSize = useContext(imageSizeContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

export default PlaceImage;
