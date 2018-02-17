function sumDiagonals(input) {
    let leftDiagonal = rightDiagonal = 0;
    let rowLength = input.length;
    let colLength = input[0].length;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < colLength; col++) {
            if (row === col) {
                leftDiagonal += input[row][col];
            }
            
            if ((row + col) === (colLength - 1)) {
                rightDiagonal += input[row][col];            
            }
        }
    }

    console.log(leftDiagonal + ' ' + rightDiagonal);
}
