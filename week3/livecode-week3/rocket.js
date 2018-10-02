function capitalH(height) {
    var temp = '|'
    var strip = '-'
    var empty = ' '
    for (let i = 1; i <= height; i++) {
        if (height % 2 ==1) {
            if (i == Math.abs(height/2)) {
                
            }
            console.log(temp+empty.repeat(height-0)+temp);    
        } else if (height%2 == 0) {
            
        }
        
        
    }

    console.log("\n");
    

}

//Test case
capitalH(3); //1
capitalH(5); // 3
capitalH(6); // 3,4
capitalH(9); // 5
capitalH(11);