function distanceIn3D(numbers){
    let x1 = Number(numbers[0]);
    let y1 = Number(numbers[1]);
    let z1 = Number(numbers[2]);

    let x2 = Number(numbers[3]);
    let y2 = Number(numbers[4]);
    let z2 = Number(numbers[5]);

    console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)));
}