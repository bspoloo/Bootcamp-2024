function sumOfEvenNumbersUpTo(number){
    sumEven = 0;
    for(i = 0; i <= number; i++){
        if(i % 2 == 0){
            sumEven += i;
        }
    }
    return sumEven;
}
console.log(sumOfEvenNumbersUpTo(6))