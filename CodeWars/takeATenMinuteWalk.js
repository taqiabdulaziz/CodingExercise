/*eslint-disable*/
function isValidWalk(walk) {
    var result = true

    if (walk.length != 10) {
        return false
    } else if(walk.length == 10) {
        return true
    }
  }


  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
  console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
  console.log(!isValidWalk(['w']));
  console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
  
  
  
  