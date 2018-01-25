function calculatePrices(input){
    let name = input[0].toString();
    let day = input[1].toString();

    let cinema = {
        "the godfather" : {
            "monday": 12,
            "tuesday": 10,
            "wednesday": 15,
            "thursday": 12.50,
            "friday": 15,
            "saturday": 25,
            "sunday": 30
        },
        "casablanca" : {
            "monday": 8,
            "tuesday": 8,
            "wednesday": 8,
            "thursday": 8,
            "friday": 8,
            "saturday": 10,
            "sunday": 10
        },
        "schindler's list" : {
            "monday": 8.50,
            "tuesday": 8.50,
            "wednesday": 8.50,
            "thursday": 8.50,
            "friday": 8.50,
            "saturday": 15,
            "sunday": 15
        },
        "the wizard of oz" : {
            "monday": 10,
            "tuesday": 10,
            "wednesday": 10,
            "thursday": 10,
            "friday": 10,
            "saturday": 15,
            "sunday": 15
        }
    };

    let movie = cinema[name.toLowerCase()];
    if (movie !== undefined){
        let result = movie[day.toLowerCase()];
        if (result === undefined){
            console.log("error");
        } else {
            console.log(result);
        }
        
    } else {
        console.log("error");
    }
}