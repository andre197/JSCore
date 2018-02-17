function findBiggestElement(input) {
    let biggest = -Infinity;

    for (let row = 0; row < input.length; row++){
        for (let col = 0; col < input[row].length; col++) {
            if (biggest < input[row][col]) {
                biggest = input[row][col];            
            }   
        }
    }

    console.log(biggest);
}