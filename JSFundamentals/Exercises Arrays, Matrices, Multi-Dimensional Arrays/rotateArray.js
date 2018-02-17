function rotateArr(input) {
    let rotations = input.pop()  % input.length;
 
    for (let i = 0; i < rotations; i++){ 
       let curr = input.pop();
       
       input.unshift(curr);
    }

    console.log(input.join(' '));
}