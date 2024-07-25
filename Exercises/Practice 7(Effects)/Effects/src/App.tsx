import { useEffect, useState } from 'react'
import './App.css'
import useTimer from './hooks/useTimer'
import usePokemon from './hooks/usePokemon'

// function getImagePokemon(id: number) {
//   const realId = `00${id}`.slice(-3);
//   return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
// }

function App() {
  const [count, setCount] = useState(1)
  const { seconds, minutes } = useTimer();
  const { pokemon, image} = usePokemon(count);
  // const [imagePokemon, setImagePokemon] = useState(getImagePokemon(count))
  const [incognito, setIncognito]  = useState(true);
  const className = incognito ? 'Pokemon' : ''; 

  //no se para, sera de constante llamado
  useEffect(() => {
    console.log('Rendered');
  })
  //solo se llamara una sola vez
  useEffect(() => {
    console.log('Run on mount');
  }, [])

  const revealPokemon = () => {
    setIncognito(!incognito)
  }
  const nextPokemon = () => {
    setCount(count => count +1)
    setIncognito(true)
    // console.log(getImagePokemon(count));
    // setImagePokemon(getImagePokemon(count))
    
  }

  return (
    <>
      <h1>{count}</h1>
      <h2>{minutes} : {seconds}</h2>
      <h2>Pokemon: {pokemon?.name}</h2>
      <div>
        <img src={image} alt='1' className={className} />
      </div>
      <button
        onClick={revealPokemon}>
        Reveal the Pokemon
      </button>
      <button
        onClick={nextPokemon}>
        Get another Pokemon
      </button>

    </>
  )
}

export default App
