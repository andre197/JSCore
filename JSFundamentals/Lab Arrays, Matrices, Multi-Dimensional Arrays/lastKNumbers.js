function lastKNumbers(n, k) {
    let arr = [1];

    for (let i = 0; i < n - 1; i++){
        let nextNumber = 0;

        let currGoBack = arr.length - k;
        if (currGoBack < 0) {
            currGoBack = 0;
        }

        for (let j = arr.length - 1; j >= currGoBack ; j--){
            nextNumber += Number(arr[j]);
        }

        arr.push(nextNumber);
    }

    console.log(arr);
}

lastKNumbers(6, 3);