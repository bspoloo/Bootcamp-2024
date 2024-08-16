import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'

function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
function countVowels(word: string): number {
  const vowels = word.split('').filter(char =>
    'aeiou'.includes(char)
  )
  return vowels.length;
}

function App() {

  const [count, setCount] = useState(0);
  const [countVolwel, setCountVolwel] = useState(0);
  const [name, setName] = useState('John Doe');
  useEffect(() => {
    console.log('render component');
  });

  //al poner useCallback y no permitir que recreen, permitiendo que esto no se modifique mas de una vez
  const sayHi = useCallback(() => {
    return 'hi' + count;
  }, [count]);

  const sayHi2 = () => {
    return 'hi' + count;
  };

  const numFactorial = useMemo(() => factorial(count), [count]);

  return (
    <>
      <p>Counter: {count}</p>
      <p>{sayHi()}</p>
      <p>{sayHi2()}</p>
      <p>Factorial: {numFactorial}</p>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setCountVolwel(countVowels(e.target.value))} />
      </div>
      <p>vowels: {countVolwel}</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increment</button>

      <button onClick={() => {
        setCount(count - 1);
      }}>Decrement</button>
    </>
  )
}

export default App
