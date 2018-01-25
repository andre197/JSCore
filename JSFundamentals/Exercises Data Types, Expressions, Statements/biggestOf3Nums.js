function biggest(input){
    let max = -Infinity;

    for(let n of input){
        if(n > max){
            max = n;
        }
    }

    console.log(max);
}