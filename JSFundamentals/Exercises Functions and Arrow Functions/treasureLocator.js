function locateTreasure(input) {
    for (let i = 0; i < input.length; i += 2){
        let x = input[i];
        let y = input[i + 1];

        let tuvalu = checkTuvalu(x, y);
        let tokelau = checkTokelau(x, y);
        let samoa = checkSamoa(x, y);
        let tonga = checkTonga(x, y);
        let cook = checkCook(x, y);

        if (tuvalu) {
            console.log("Tuvalu");
        } else if (tokelau) {
            console.log('Tokelau');
        } else if (samoa) {
            console.log('Samoa');
        } else if (tonga) {
            console.log('Tonga');
        } else if (cook) {
            console.log('Cook');
        } else {
            console.log('On the bottom of the ocean');
        }

    }

    function checkIfIsIn(x, y, x1, y1, x2, y2) {
        if (x1 <= x
            && x <= x2
            && y1 <= y
            && y <= y2) {
            return true;
        }

        return false;
    }

    function checkTuvalu(x, y){
        let x1 = 1;
        let y1 = 1;
        let x2 = 3;
        let y2 = 3;

        return checkIfIsIn(x, y, x1, y1, x2, y2);        
    }

    function checkTokelau(x, y){
        let x1 = 8;
        let y1 = 0;
        let x2 = 9;
        let y2 = 1;

        return checkIfIsIn(x, y, x1, y1, x2, y2);        
    }

    function checkSamoa(x, y){
        let x1 = 5;
        let y1 = 3;
        let x2 = 7;
        let y2 = 6;

        return checkIfIsIn(x, y, x1, y1, x2, y2);        
    }

    function checkTonga(x, y){
        let x1 = 0;
        let y1 = 6;
        let x2 = 2;
        let y2 = 8;

        return checkIfIsIn(x, y, x1, y1, x2, y2);        
    }

    function checkCook(x, y){
        let x1 = 4;
        let y1 = 7;
        let x2 = 9;
        let y2 = 8;

        return checkIfIsIn(x, y, x1, y1, x2, y2);        
    }

}