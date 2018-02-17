function cook(input){
    let n = input[0];
    for (let i = 1; i < input.length; i++){
        n = calculate(input[i], n);

        console.log(n);
    }

    function calculate(action, n){
        switch (action) {
            case 'chop': return n / 2;      
            case 'dice': return Math.sqrt(n);     
            case 'spice': return n + 1;           
            case 'bake': return n * 3;            
            case 'fillet': return n - (n * 0.2);                
        }
    }
}
