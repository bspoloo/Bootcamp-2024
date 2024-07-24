import React, { useState } from 'react'
import './App.css'

type TodoType = {
  text: string;
  id: number;
  completed: boolean;
}


function App() {
  const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState<string>('Aqui va el texto xd');
  const [toDos, setToDos] = useState<TodoType[]>([]); //una lista del tipo de TodoTyp, que almacenara a todos de ese tipo xd.

  //cuando se escuche algun cambio en el input, este se actualizara y mostrara en pantalla.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const addToList = () => {

    //creamos un objeto que se almacene dentro del ToDo
    //esto para que guarde los valores anteriores 
    setInputText('dsdsd');
    setToDos([...toDos,{text: inputText, id: toDos.length + 1, completed: false}]);
    
  }

  const completTask = (id: number) => {
    setToDos(
      toDos.map((item) => {
        if (item.id == id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)
      }>
        count is {count}
      </button>

      <button onClick={addToList}>Add to List</button>

      <ul>
        {toDos.map(element => (
          <li key={element.id} className='card' onClick={()=> completTask(element.id)}>
            <p>{element.text}</p>

            <input
              type="checkbox"
              checked={element.completed}
            />

          </li>
        ))}
      </ul>

      <input
        type="text"
        onChange={handleChange}
      />
      <p>{inputText}</p>
    </>
  )
}

export default App
