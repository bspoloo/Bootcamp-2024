import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import PokemonCard from './components/Card';
import { usePokemon } from './hooks/pokemonHook';
import getType from './functions/getType';

export default function App() {
  const [offset, setOffset] = useState(0);
  const { loading, pokemons } = usePokemon(offset);
  


  if (loading) {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.container}>Loading...</Text> */}
        <ActivityIndicator size={'large'} color="#0000ff" />
      </View>
    );
  }

  console.log(pokemons.map((pokemon) => pokemon));
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => <PokemonCard name={item.name} id={index + 1}/>}
        onEndReached={() => setOffset((old) => old + 25)}
        onEndReachedThreshold={1.5}
        contentContainerStyle={{ gap: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: "#1e1e1e",
  },
  text: {
    fontSize: 50,
    color: 'blue'
  }
});
