import { View, Text, Image, StyleSheet } from "react-native";
import getImageUrl from "../functions/getImageUrl";
import { useEffect, useRef, useState } from "react";
import getType from "../functions/getType";
import getElement from "../functions/getElementUrl";
import getColor from "../functions/getColor";
import darkenColor from "../functions/getColorDark";

type Props = {
    id: number;
    name: string;
}

function PokemonCard({ id, name }: Props) {
    const type = getType(id);
    const {color} = getColor(type);
    const darkColor = darkenColor(color , 50);
    const [bgColor, setBgColor] = useState(color);
    const [bgColorDark, setBgColorDark] = useState(color);
    const cardRef = useRef<View>(null);

    useEffect(() => {
        setBgColor(color);
        setBgColorDark(darkColor);
    }, [color, darkColor]);

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]} ref={cardRef}>
            <View>
                <Text>#00{id}</Text>
                <Text style={styles.name}>{name}</Text>

                <View style={[styles.element, { backgroundColor: bgColorDark }]} ref={cardRef}>
                    <Image style={styles.elementImage} source={{ uri: getElement(type) }}></Image>
                    <Text style={styles.colorWhite}>{type}</Text>
                </View>

            </View>
            <View>
                <Image style={styles.image} source={{ uri: getImageUrl(id) }}></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 2,
        borderColor: '#333',
        borderStyle: 'solid',
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        color: "#1e1e1e"
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 16
    },
    element:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#333',
        borderStyle: 'solid',
        borderRadius: 3,
    },
    colorWhite:{
        flex: 1,
        justifyContent: "center",
        fontSize: 10,
        color: "white"
    },
    elementImage:{
        width: 10,
        height: 15,
        marginRight: 16
    }
});

export default PokemonCard;