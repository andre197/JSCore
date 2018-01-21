function primeChecker(n){
    for (let i = 2; i < Math.sqrt(Math.abs(n)); i++ ){
        if(Math.abs(n) % i === 0){
            return false;
        }
    }
    
    return true;
}

primeChecker(-5);