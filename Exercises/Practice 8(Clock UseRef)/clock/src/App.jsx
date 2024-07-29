import "./index.css";
import { useEffect, useRef, useState } from "react"; //el use ref sirve para tomar referencias y hacer cambios a un elemento

export default function App() {
  const [seconds, setSeconds] = useState(0)
  const myInput = useRef(null);
  const onFocusCounter = useRef(0);
  const intervalRef = useRef(null);
  
  //o usar el useEffect para un autoFocus
  // useEffect(()=>{
  //   focus();
  // }, [])

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      console.log("working");
    }
  };
  const stopTimer = () => {
    // Complete this function
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reiniciar la referencia después de detener el intervalo
    console.log("stopping");
  };
  const resetTimer = () => {
    setSeconds(seconds => 0)
    stopTimer(); // Detener el temporizador cuando se restablece
  };

  const setMinute = (e) => {
    
  };

  const updateFocusCounter = () => {
    onFocusCounter.current = onFocusCounter + 1;
    console.log("Focus counter: ", onFocusCounter.current);
  }
  const focus = () => {
    myInput.current.focus();
  }

  return (
    <div className="container">
      <button onClick={focus}>Focus input</button>  {/*ese focus sirve para que cuando se entre a la pagina este se enfoque en ese input */}
      <input
        onChange={setMinute}
        type="number"
        // autoFocus puede ser autofocus
        ref={myInput}
        onFocus={updateFocusCounter}
        name=""
        id=""
        placeholder="Enter minutes" />
      <button>Set Timer</button>
      <h1>Timer</h1>
      <span> {Math.round(seconds / 60)} mins </span>
      <span> {seconds % 60} seconds</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
