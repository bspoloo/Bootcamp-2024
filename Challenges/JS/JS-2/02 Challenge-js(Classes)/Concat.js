class Concat{
    getConcatArray(data){
        let concatArray = [];
        data.forEach(element => {
            concatArray = concatArray.concat(element);
        });
        return concatArray;
    }
}
