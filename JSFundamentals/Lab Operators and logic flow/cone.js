function areaAndVolumeOfCone(r, h){
    let volume = (Math.PI * r * r * h) / 3;
    let area = Math.PI * r * Math.sqrt(r * r + h * h) + Math.PI * r * r;

    console.log(`volume = ${volume}\n`);
    console.log(`area = ${area}`);
}