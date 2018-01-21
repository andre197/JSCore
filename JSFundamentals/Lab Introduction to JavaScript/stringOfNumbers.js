function stringOfNumbers(num){
    let result = '';
    for(let i = 1; i <= num; i++){
        result += i;
    }

    return result;
}

console.log(stringOfNumbers(11));