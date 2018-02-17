function airPolution(airPolut, commands){
    let matrix = new Array(airPolut.length);

    airPolut.forEach((element, i) => {        
        matrix[i] = airPolut[i].split(' ').map(n => Number(n));
    });   

    commands.forEach((commandToken, i) => {
        let command = commandToken.split(' ')[0];
        let coordinates = commandToken.split(' ')[1];
        switch (command) {
            case 'breeze':
                matrix[coordinates].forEach((element, i) => {
                    matrix[coordinates][i] -= 15;
                    if (matrix[coordinates][i]<0) {
                        matrix[coordinates][i] = 0;
                    }
                });
                break;
            case 'gale':
                for (let row = 0; row < matrix.length; row++) {
                    if (coordinates< matrix[row].length) {
                        matrix[row][coordinates] -= 20;
                        if (matrix[row][coordinates] < 0) {
                            matrix[row][coordinates] = 0;
                        }
                    }                   
                }
                break;    
            case 'smog':
                matrix.forEach((rowEl, row) => {
                    matrix[row].forEach((colEl, col) => {
                        matrix[row][col] += Number(coordinates); 
                    })
                });
                break;    
            default:
                break;
        }
    });

    let pollutedAreas = 'Polluted areas:'

    matrix.forEach((element1, row) => {
        matrix[row].forEach((element2, col) => {
            if (matrix[row][col] >= 50) {
                pollutedAreas+=` [${row}-${col}],`;
            }
        })        
    });
    
    console.log(pollutedAreas.length === 15 ? 'No polluted areas' : pollutedAreas.substring(0,pollutedAreas.length-1));
    
}

airPolution([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]  
);
