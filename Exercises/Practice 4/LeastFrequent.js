class LeastFrequent{
    constructor(array){
        this.array = array;
        this.book = this.FullBook(this.array);
    }
    FindLeasFrecuent(){
        let leastFrequent = null;
        let minCount = Infinity;

        for (let i = 0; i < this.array.length; i++) {
            this.book[this.array[i]] += 1;
        }
        
        for(let key in this.book){
            if(this.book[key] < minCount){
                minCount = this.book[key];
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