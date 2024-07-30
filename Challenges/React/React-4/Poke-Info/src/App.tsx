import { useState } from 'react';
import Card from './components/Card';
import './App.css';
import usePokemon from './hooks/usePokemon';
import getElement from './functions/getElement';

function App() {
  const [count, setCount] = useState(0);
  const { pokemon, image } = usePokemon(count);
  const elementImage = getElement(pokemon?.types?.[0]?.type?.name);
  
  
  const changePokemon = () => {
    setCount(Math.floor(Math.random() * 898) + 1);
  };

  return (
    <>
      <button onClick={changePokemon}>Get another Pokemon</button>
      <br />
      <br />
      <div>
        {pokemon && (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            element={pokemon?.types?.[0]?.type?.name}
            imageElement={elementImage}
            imagePokemon={image}
          />
        )}
      </div>
    </>
  );
}

export default App;
