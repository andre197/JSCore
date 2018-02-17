function inVolume(input){
    for (let i = 0; i < input.length; i += 3){
        let x = input[i], y = input[i + 1], z = input[i + 2];

        if(check(x, y, z)){
            console.log("inside");
        } else {
            console.log("outside");                
        } 
    }
    
    function check(x, y, z){
        let x1 = 10, x2 = 50;
        let y1 = 20, y2 = 80;
        let z1 = 15, z2 = 50;
    
        if (x1 <= x 
            && x <= x2
            && y1 <= y
            && y <= y2
            && z1 <= z
            && z <= z2) {
            return true;
            console.log("inside");
        } else {
            return false;
            console.log("outside");                
        }
    }
}