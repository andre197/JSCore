function check(input) {
    let x1 = input[0]; 
    let y1 = input[1]; 
    let x2 = input[2];
    let y2 = input[3];
    let centerX = 0;
    let centerY = 0;

    findDistance(x1, y1, centerX, centerY);
    findDistance(x2, y2, centerX, centerY);
    findDistance(x1, y1, x2, y2);

    function findDistance(x1, y1, x2, y2) {
        let res = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
        
        let output = `{${x1}, ${y1}} to {${x2}, ${y2}} is `; 

        let ending = 'valid';
        if (res % 1 != 0) {
            ending = 'invalid';
        }

        console.log(output + ending);
    }
}