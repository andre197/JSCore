function firstAndLastKNums(input) {
    let k = input.shift();

    let arrFirstK = [];
    let arrSecK = [];

    let inputL = input.length;

    input.forEach((element, i) => {
        if (i < k) {
            arrFirstK.push(element);
        } 

        if ((inputL - 1 - k) < i) {
            arrSecK.push(element);
        }
    });

    console.log(arrFirstK);
    console.log(arrSecK);
}

firstAndLastKNums([3, 2, 3, 4, 5]);