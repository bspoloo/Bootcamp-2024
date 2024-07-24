import './App.css'
import { useState } from 'react'
import SeatComponent from './components/SeatComponent'

type Seat = {
  column: string,
  row: number
}

function App() {
  const [seatList, setSeatList] = useState<Seat[][]>([]);

  const fillCinema = () =>{
    const seats: Seat[][] = [];
    for(let r = 0; r < 5; r++){
      const row: Seat[] = [];
      for(let c = 0; c < 5; c++){
        row.push({column: String.fromCharCode(65+c), row: r});
      }
      seats.push(row);
    }
    setSeatList(seats);
  }

  return (
    <>
    <button onClick={fillCinema}>Fill Cinema</button>
    <br />
    <br />
    <div className='cinema'>
      {
        seatList.map((row, rowIndex) => (
          <div key={rowIndex} className='seat-row'>
            {
              row.map((seat, seatIndex) =>(
                <SeatComponent key={seatIndex} column={seat.column} row={seat.row}/>
              ))
            }
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
