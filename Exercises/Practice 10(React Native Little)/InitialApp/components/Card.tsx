import { View, Text, Image, StyleSheet } from "react-native";
import getImageUrl from "../functions/getImageUrl";

type Props = {
    id: number;
    name: string;
}

function PokemonCard({ id, name }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Image style={styles.image} source={{ uri: getImageUrl(id) }}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row-reverse",
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        color: "#1e1e1e"
    },
    image: {
        width: 75,
        height: 75,
        marginRight:16
    }
});

export default PokemonCard;