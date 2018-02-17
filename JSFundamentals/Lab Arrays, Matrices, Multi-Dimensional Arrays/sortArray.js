function sort(input) {
    let arr = [];
    
    for (let n of input){
        if (n < 0) {
            arr.unshift(n);
        } else {
            arr.push(n);
        }
    }

    arr.forEach(element => {
        console.log(element);
    });
}