function balikString(input) {
    var y= "";
    for (var i = input.length - 1; i >= 0; i--) {
        y = y + input[i]
    } 
    return y;
}

console.log(balikString('hello world!'))