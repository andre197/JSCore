function findEqualNeighbours(input) {
    let pairsCnt = 0;
    let rowLength = input.length;
    let checkedColumns = Array(rowLength);
    for (let i = 0; i < checkedColumns.length; i++) {
        let colL = input[0].length;

        checkedColumns[i] = new Array(colL).fill(false);
        
    }

    input.forEach((rowElement, row) => {
        let colLength = input[row].length;

        rowElement.forEach((colElement, col) => {
            if (checkLeft(col) && colElement === input[row][col - 1]) {
                if (!checkedColumns[row][col] && !checkedColumns[row][col - 1]) {
                    checkedColumns[row][col] = true;
                    pairsCnt++;              
                }
            }
            if (checkRigth(col, colLength) && colElement === input[row][col + 1]) {
                if (!checkedColumns[row][col] && !checkedColumns[row][col + 1]) {
                    checkedColumns[row][col] = true;
                    pairsCnt++;              
                }
            }
            if (checkUp(row) && colElement === input[row - 1][col]) {
                if (!checkedColumns[row][col] && !checkedColumns[row - 1][col]) {
                    checkedColumns[row][col] = true;
                    pairsCnt++;              
                }
            }
            if (checkDown(row, rowLength) && colElement === input[row + 1][col]) {
                if (!checkedColumns[row][col] && !checkedColumns[row + 1][col]) {
                    checkedColumns[row][col] = true;
                    pairsCnt++;              
                }
            }
        })
    });

    return pairsCnt;

    function checkLeft(col) {
        if (col - 1 < 0) {
            return false;
        }

        return true;
    }

    function checkRigth(col, colLength) {
        if (col + 1 > colLength - 1) {
            return false;
        }

        return true;
    }

    function checkUp(row) {
        if (row - 1 < 0) {
            return false;
        }

        return true;
    }

    function checkDown(row, rowLength) {
        if (row + 1 > rowLength - 1) {
            return false;
        }

        return true;
    }
}
