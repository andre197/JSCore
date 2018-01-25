function draw(n){
    let result = '';

    let rows = n;
    if(rows % 2 === 0){
        rows--;
    }

    for (let i = 0; i < rows; i++){
        let char = '|';
        let charsBetweenChars = ' '.repeat(n - 2);

        if ((i === 0) || (i === rows - 1) || (i === Math.ceil(rows/2) - 1)){
            char = '+'; 
            charsBetweenChars = '-'.repeat(n - 2);
        }

        
        result += char + charsBetweenChars + char + charsBetweenChars + char + "\n";
    } 

    console.log(result);
}

draw(4);