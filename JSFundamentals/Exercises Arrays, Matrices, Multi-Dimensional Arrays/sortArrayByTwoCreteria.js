function sort(input) {
    console.log(input.sort((a,b)=>{
        if (a.length === b.length) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        } else if (a.length > b.length){
            return 1;
        } else {
            return -1;
        }
    }).join('\n'));
}