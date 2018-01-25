function converter(inches){
    const inchesInFeet = 12; 
    let feet = Math.floor(inches / inchesInFeet);
    let restInches = inches % inchesInFeet;

    console.log(`${feet}'-${restInches}"`);
}