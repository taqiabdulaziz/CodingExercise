/*eslint-disable*/

function kotak(params) {
    
  for (let i = 0; i <= params; i++) {
    if (String(i).charAt(1)!=5 && 
        String(i).charAt(0)!=5) {
            
        console.log(i)
    }    
  }
}

kotak(60);



