class Duplicates {
    constructor(array) {
        this.array = array;
    }

    RemoveDuplicates() {
        let book = this.FullBook(this.array);
        let newArray = this.array.filter(element => book[element] === 1);
        return newArray;
    }

    FullBook(array) {
        let book = {};
        array.forEach(element => {
            book[element] = (book[element] || 0) + 1;
        });
        return book;
    }
}
//this class was modified
