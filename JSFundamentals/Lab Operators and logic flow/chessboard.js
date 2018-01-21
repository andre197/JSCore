function chessboard(n){
    let result = '<div class="chessboard">\n';

    for (let i = 0; i < n; i++){
        result += "  <div>\n";
        for (let a = 0; a < n; a++){
            let color = (i+a) % 2 === 0 ? "black" : "white";

            result += `    <span class="${color}"></span>\n`
        }
        result += "  </div>\n";
    }

    return result + "</div>"
}