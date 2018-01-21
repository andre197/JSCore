function distanceBetweenPoints(x1, y1, x2, y2){
    let a = x2 - x1;
    let b = y2 - y1;

    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    return c;
}

console.log(distanceBetweenPoints(2, 4, 5, 0));