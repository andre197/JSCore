function distance(numbers){
    let dist1 = Number(numbers[0]);
    let dist2 = Number(numbers[1]);
    let t = Number(numbers[2]);

    let dist = Math.abs(dist1 - dist2);
    let distInMeters = dist * 1000;

    let totalDistanceTraveled = distInMeters * t;

    console.log(totalDistanceTraveled / 3600);
}
