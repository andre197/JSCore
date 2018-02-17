function modifyAvrg(input){
    let number = input.toString();

    while (true) {
        let avrg = findAverage(number);
        if (avrg > 5) {
            break;
        }

        number += 9;
    }

    console.log(number);

    function findAverage(number){
        let avrg = 0;

        for (let digit of number){
            avrg += Number(digit);        
        }

        return avrg/number.length;
    }
}