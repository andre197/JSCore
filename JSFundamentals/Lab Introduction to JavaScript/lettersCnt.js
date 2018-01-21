function lettersCnt(word, letter){
    let cnt = 0;

    for(let i = 0; i < word.length; i++){
        if(word[i] === letter){
            cnt++;
        }
    }

    console.log(cnt);
}