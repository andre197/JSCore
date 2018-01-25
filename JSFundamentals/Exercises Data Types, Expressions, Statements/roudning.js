function rounding(input){
    if(input[1] > 15){
        input[1] = 15;
    }

    let multiplicator = Math.pow(10, input[1]);

    console.log(Math.round(input[0] * multiplicator) / multiplicator);
}