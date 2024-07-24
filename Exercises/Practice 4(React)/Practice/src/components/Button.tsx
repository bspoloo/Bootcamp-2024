import { useState } from "react";

type Props = {
    onPress: () => void;
    title: string;
    count: number;
};

function Button({ onPress, title, count }: Props) {
    const [countInPlace, setCountInPlace] = useState(0);
    const onPressInPlace = () => {
        setCountInPlace(countInPlace => countInPlace + 1);
    }

    return <>
        <button onClick={onPress}>
            {title + ": "}{count}
        </button>
        <br />
        <br />
        <button onClick={onPressInPlace}>
            {"of count in button own: "}{countInPlace}
        </button>
    </>
}

export default Button;