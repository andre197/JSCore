function hungryProgrammer(meals, commands){
    let mealsEaten = 0;
    for (let element of commands){
        let commandTokens = element.split(' ');
        let command = commandTokens[0];

        switch (command.toLowerCase()) {
            case 'serve':
                if (meals.length == 0) {
                    continue;
                }   
                let servedMeal = meals.pop();
                console.log(servedMeal + ' served!');                
                continue;
            case 'eat':
                if (meals.length == 0) {
                    continue;
                }
                let eatenMeal = meals.shift();
                console.log(eatenMeal + ' eaten');
                mealsEaten++;
                continue;
            case 'add':
                let mealToBeAdded = commandTokens[1];
                if (mealToBeAdded !== undefined) {
                    meals.unshift(mealToBeAdded);
                }
                continue;
            case 'consume':
                let startIndex = Number(commandTokens[1]);
                let endIndex = Number(commandTokens[2]);
                if (checkIndexes(startIndex, endIndex, meals.length)) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        meals.splice(startIndex, 1);  
                        mealsEaten++             
                    }
                    console.log('Burp!');  
                }              
                continue;
            case 'shift':
                let index1 = Number(commandTokens[1]);
                let index2 = Number(commandTokens[2]);
                if (checkIndexes(index1, index2, meals.length)) {
                    let mealToGoSecond = meals[index1];
                    meals[index1] = meals[index2];
                    meals[index2] = mealToGoSecond;
                }
                continue;
            default:
                break;
        }  
        break;  
    }

    if (meals.length > 0) {
        console.log('Meals left: ' + meals.join(', '));
    } else {
        console.log('The food is gone');        
    }
    console.log('Meals eaten: ' + mealsEaten);

    function checkIndexes(index1, index2, length){
        return index1 >= 0 && index2 < length && index1 < index2
    }
}

hungryProgrammer([],
['Serve',
    'Eat',
    'Consume 0 0',
    'Add chicken',
    'Add rice',
    'Eat',
    'End']
)