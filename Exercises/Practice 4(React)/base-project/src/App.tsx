import Button from './Components/Button'
import './App.css'
//se va a renderear por lo menos 2 veces, de ahi que el valor del guess se muestre 2,4,6

function Cup({guest}: {guest: number}){
  return <h2>{guest}</h2>
}

function App() {
  return (
    <>
      <h1>React app</h1>
      <Button />
      <Cup guest={1}/>
      <Cup guest={2}/>
      <Cup guest={3}/>
    </>
  )
}

export default App
