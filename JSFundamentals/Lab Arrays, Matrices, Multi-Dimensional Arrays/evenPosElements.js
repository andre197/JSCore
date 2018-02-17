function evenPositionElements(input) {
    return input.filter(function(el, i) {
        return i % 2 == 0;
    }).join(' ');
}

console.log(evenPositionElements([1, 2, 3]));