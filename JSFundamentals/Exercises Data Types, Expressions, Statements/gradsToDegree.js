function gradsToDegree(grads){
    if (grads >= 0){    
        console.log((grads * 0.9) % 360);
    } else{
        console.log(((400 + grads) % 360) * 0.9);
    }
}