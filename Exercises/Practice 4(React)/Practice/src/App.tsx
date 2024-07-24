import React, { useState } from 'react';
import './App.css'
import Button from './components/Button'

type Person = {
  name: string;
  lastname: string;
}

function App() {

  const [count, setCount] = useState(0);
  const [resetCountNumber, setResetCount] = useState(0);
  const [stateCoin, setStateCoin] = useState('heads');
  const [person, setPerson] = useState<Person>({
    name: '',
    lastname: ''
  });

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
    console.log(e.target.value);
    setPerson({ ...person, [target]: e.target.value });
  }
  const onSave = () => {
    console.log(person)
  }
  const onPress = () => {
    setCount(count + 1); // aumenta de uno en uno el contador
  }
  const resetCount = () => {
    setCount(0)
    setResetCount(resetCountNumber + 1)
  }

  const flipCoin = () => {
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      setStateCoin('heads')
    } else {
      setStateCoin('tails')
    }
  }

  return (
    <>
      <input
        onChange={(e) => onChangeText(e, 'name')}
        type="text"
        placeholder='name'
      />
      <input
        onChange={(e) => onChangeText(e, 'lastname')}
        type="text"
        placeholder='lastname'
      />
      <button
        onClick={onSave}>
        Save Person
      </button>
      <Button
        count={count}
        title={'Click me! '}
        onPress={onPress}
      />
      <Button
        count={count}
        title={'Reset count ' + resetCountNumber}
        onPress={resetCount}
      />
      <Button
        count={count}
        title={stateCoin}
        onPress={flipCoin}
      />
      <p>
        {person.name + ' ' + person.lastname}
      </p>

    </>
  )
}

export default App
