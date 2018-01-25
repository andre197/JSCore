function lastDayOfPreviousMonth(input){
    let date = new Date(input[2], (input[1] - 1), 0);

    console.log(date.getDate());
}