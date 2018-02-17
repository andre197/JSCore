function getSmallest2Nums(input) {
    let result = input.sort((a, b) => {return a - b});
    result.length = 2;
    console.log(result.join(' '));
}