function lost(keyWord, input){
    let regex = /(north|east)\D*?(\d{2})[^,]*,?\D*?(\d{6})/gi;

    let message = new RegExp(`${keyWord}(.*?)${keyWord}`, 'g').exec(input)[1];

    let lat = '';
    let lon = '';

    while (true) {
        let m = regex.exec(input);

        if (m === null) {
            break;
        }

        if (m[1].toLowerCase() === 'north') {
            lat = `${m[2]}.${m[3]} N`;
        } else {
            lon = `${m[2]}.${m[3]} E`;
        }
    }

    console.log(lat);
    console.log(lon);
    console.log(`Message: ${message}`);
    
}

lost('4ds',
    'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532'
    )