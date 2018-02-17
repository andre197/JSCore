function magicMatrixCheck(input) {
    let sum = input[0].reduce(getSum);
    
    if (checkRows(input, sum) && checkCols(input, sum)) {
        console.log('true');
    } else {
        console.log('false');
    }

    function checkRows(matrix, sum) {
        for (let row = 0; row < matrix.length; row++) {
            let currSum = 0;
            for (let col = 0; col < matrix[row].length; col++) {
                currSum += matrix[row][col];
            }
            if (currSum !== sum) {
                return false;
            }
        }

        return true;
    }

    function checkCols(matrix, sum) {
        for (let col = 0; col < matrix[0].length; col++) {
            let currSum = 0;
            for (let row = 0; row < matrix.length; row++) {
                currSum += matrix[row][col];     
            }
            if (currSum !== sum) {
                return false;
            }
        }

        return true;
    }

    function getSum(total, num) {
        return total + num;
    }    
}

magicMatrixCheck([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );