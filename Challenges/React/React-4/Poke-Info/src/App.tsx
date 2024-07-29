import { useState } from 'react';
import Card from './components/Card';
import './App.css';
import usePokemon from './hooks/usePokemon';
import useElement from './hooks/useElement';

function App() {
  const [count, setCount] = useState(1);
  const { pokemon, image } = usePokemon(count);
  const [typeName, setTypeName] = useState(pokemon?.types?.[0]?.type?.name || ''); 
  const { imageElement } = useElement(typeName);
  
  const changePokemon = () => {
    setCount(Math.floor(Math.random() * 898) + 1);
    setTypeName(pokemon?.types?.[0]?.type?.name);
  };

  return (
    <>
      <button onClick={changePokemon}>Get another Pokemon</button>
      <div>
        {pokemon && (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            element={typeName}
            imageElement={imageElement}
            imagePokemon={image}
          />
        )}
      </div>
    </>
  );
}

export default App;
