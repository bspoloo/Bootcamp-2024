import { useState } from 'react';
import seat from '../assets/seat.png'
import seatReserved from '../assets/seatReserved.png'

type Seat = {
    column: string,
    row: number
}

function SeatComponent({ column, row }: Seat) {

    const [isReserved, setIsReserved] = useState(false);
    const changeState = () => {
        setIsReserved(!isReserved);
    }
    return (
        <>
            <div>
                <button onClick={changeState}>
                    <div>
                        <p>{column}{row}</p>
                        <img
                            src={isReserved ? seatReserved : seat}
                            alt={`${column}${row}`}
                        />
                    </div>
                </button>
            </div>
        </>
    )
}

export default SeatComponent