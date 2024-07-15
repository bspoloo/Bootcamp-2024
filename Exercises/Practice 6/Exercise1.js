class LeastFrequent{
    constructor(array){
        this.array = array;
    }
    FindLeasFrecuent(){
        let leastFrequent = null;
        let minCount = Infinity;
        var book = this.FullBook(); 

        for (let i = 0; i < this.array.length; i++) {
            book[this.array[i]] += 1;
        }
        for(let key in book){
            if(book[key] == 1){
                minCount = book[key];
                leastFrequent = key;
            }
        }
        return leastFrequent;
    }
    FullBook(){
        var book = {};
        for(let i = 0; i< this.array.length; i++ ){
            book[this.array[i]] = 0;
        }
        return book;
    }
}
let array = [1,2,4,7,4,2,1]
let leastFrecuet = new LeastFrequent(array)
console.log(leastFrecuet.FindLeasFrecuent());