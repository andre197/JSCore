function expedition(matrix1, matrix2, overlayCoordinates, startCoordinates){
    let mat1RowLen = matrix1.length;
    let mat1ColLen = matrix1[0].length;
    
    let mat2RowLen = matrix2.length;
    let mat2ColLen = matrix2[0].length;

    for (let i = 0; i < overlayCoordinates.length; i++) {
        let x = overlayCoordinates[i][0];
        let y = overlayCoordinates[i][1];

        for (let row = x, rowInn = 0; rowInn < mat2RowLen && row < mat1RowLen; row++, rowInn++) {
            for (let col = y, colInn = 0; colInn < mat2ColLen && col < mat1ColLen; col++, colInn++) {
                if (matrix2[rowInn][colInn] === 1) {
                    if (matrix1[row][col] === 1) {
                        matrix1[row][col] = 0;
                    } else if (matrix1[row][col] === 0) {
                        matrix1[row][col] = 1;
                    }
                }                
            }
        }
    }

    let stepsCnt = 1;
    let currentX = startCoordinates[0];
    let currentY = startCoordinates[1];

    while (true) {
        if (currentX > 0 && matrix1[currentX - 1][currentY] === 0) {
            matrix1[currentX][currentY]+=1;
            currentX -= 1;
            stepsCnt++; 
        } else if (currentX < matrix1.length - 1 && matrix1[currentX + 1][currentY] === 0) {
            matrix1[currentX][currentY]+=1;
            currentX++;
            stepsCnt++;
        } else if (currentY > 0 && matrix1[currentX][currentY - 1] === 0) {
            matrix1[currentX][currentY]+=1;
            currentY -= 1;
            stepsCnt++;0
        } else if (currentY < matrix1[currentX].length - 1 && matrix1[currentX][currentY + 1] === 0) {
            matrix1[currentX][currentY]+=1;
            currentY++;
            stepsCnt++;
        } else {
            break;
        }        
    }

    console.log(stepsCnt);

    if (currentX === 0) {
        console.log('Top');
    } else if (currentY === 0) {
        console.log('Right');        
    } else if (currentX === matrix1.length - 1) {
        console.log('Bottom');        
    } else if (currentY === matrix1[0].length - 1) {
        console.log('Left');
    } else {
        let ending = '';
        if (currentX < (mat1RowLen / 2) && currentY >= (mat1ColLen / 2)) {
            ending = 1;
        } else if (currentX < (mat1RowLen / 2) && currentY < (mat1ColLen / 2)) {
            ending = 2;
        } else if (currentX >= (mat1RowLen / 2) && currentY < (mat1ColLen / 2)) {
            ending = 3;
        } else if (currentX >= (mat1RowLen / 2) && currentY >= (mat1ColLen / 2)) {
            ending = 4;
        }

        console.log('Dead end '+ ending );
    }
    

    function getMinLength(l1, l2){
        if (l1 < l2) {
            return l1;
        }

        return l2;
    }
}

expedition([[1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0]],
   [[0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1]],
   [[0, 0],
    [2, 1],
    [1, 0]],
   [2, 0]
);