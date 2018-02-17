function arrAndRemove(input) {
    let arr = [];

    input.forEach((element, i) => {
        if(element.toLowerCase() === 'add'){
            arr.push(i+1);
        } else {
            arr.pop();
        }
    });

    let output = arr.length === 0 ? 'empty' : arr.join('\n');

    console.log(output);
}
