function extractSequence(input) {
    let biggest = -Infinity;
    input = input.filter(a => {
        if (a > biggest) {
            biggest = a;
            return true;
        }
        return false;
    });

    console.log(input.join('\n'));
}