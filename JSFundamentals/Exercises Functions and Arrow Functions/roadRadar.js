function radar(input){
    let speed = input[0], zone = input[1];

    let limit = getLimit(zone);

    console.log(totalSpeeding(speed, limit));

    function getLimit(zone){
        switch (zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    function totalSpeeding(speed, limit){
        let totalSpeeding = speed - limit;

        if (totalSpeeding > 0) {
            if (totalSpeeding <= 20) {
                return 'speeding';
            } else if (totalSpeeding <= 40){
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }

        return '';
    }
}