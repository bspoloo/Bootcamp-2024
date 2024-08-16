import { useState } from 'react';
import List from './Components/List';
import imageSizeContext from './Context/context';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 50 : 100;
  return (
    // nos dice que el contexto solo estara dentro de este provider, en caso de no estar este no se estara disponible
    //todos los contextos tienen que estar en el app
    //tambien se puede enviar un objeto
    
    <imageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
    </ imageSizeContext.Provider>
  )
}
