class Seat {
    #isAvailable
    constructor() {
        this.#isAvailable = false;
    }
    GetIsAvaible(){ return this.#isAvailable; }
    SetIsAvaible(){ this.#isAvailable = !this.#isAvailable; }
}
class Manager{
    constructor(){
    }
    static FillSeats(rows, columns){
        const seats = [];
        for(let i = 0; i < rows; i++){
            const row = [];
            for(let j = 0; j < columns; j++){
                row.push(new Seat());
            }
            seats.push(row);
        }
        return seats;
    }
}
class Cinema {
    #columns;
    #rows;
    #seats;
    constructor(columns, rows) {
        this.#columns = columns;
        this.#rows = rows;
        this.#seats = Manager.FillSeats(this.#rows,this.#columns);
    }
    reserve(column, row) {
        if (!this.validateEspace(column, row)) {
            console.log(`The seat ${row}-${column} does not exist.`);
            return;
        }
        if (this.#seats[row][column].GetIsAvaible()) {
            console.log(`The seat ${row}-${column} is already reserved.`);
        } else {
            this.#seats[row][column].SetIsAvaible();
            console.log(`Seat ${row}-${column} reserved successfully.`);
        }
    }
    showCine() {
        for(let row = 0; row < this.#rows; row++){
            console.log(this.#seats[row].map(seat => seat.GetIsAvaible() ? 'X' : 'O').join(' '));
        }
    }
    validateEspace(column, row){
        return row >= 0 && row < this.#rows && column >= 0 && column < this.#columns;
    }
}

const cine = new Cinema(5, 5);
cine.reserve(2, 2);
cine.reserve(1, 2);
cine.reserve(3, 1);
cine.reserve(1, 2);
cine.reserve(1, 6);
cine.reserve(0, 6);
cine.showCine()