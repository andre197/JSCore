function compoundInterestCalculator(input){
    let p = input[0];
    let i = input[1] / 100;
    let n = 12 / input[2];
    let t = input[3];

    console.log((p * Math.pow((1 + (i / n)), n * t)).toFixed(2));
}