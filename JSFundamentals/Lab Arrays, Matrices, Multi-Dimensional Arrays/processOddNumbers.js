function processOddNums(input) {
    let processed = input
                        .filter(getOddNums)
                        .map(process)
                        .reverse();

    console.log(processed);

    function getOddNums(n, i) {
        return i % 2 !== 0;  
    }

    function process(n) {
        return n * 2;
    }
}

