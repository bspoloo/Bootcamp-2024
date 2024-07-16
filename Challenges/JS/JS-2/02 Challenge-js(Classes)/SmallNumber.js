class SmallNumber {
    FindSmallNumerMath(array){
        return Math.min(...array);
    }
    FindSmallNumerReduce(array){
        return array.reduce((a,b)=>Math.min(a,b));
    }
    FindSmallNumerFor(array){
        var SmallNumber = Infinity;
        for(var i = 0; i< array.length; i++){
            if(array[i] <= SmallNumber){
                SmallNumber = array[i]
            }
        }
        return SmallNumber;
    }
}
