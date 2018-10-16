let  array_masalah= [
	[1,2,3,4],
	[5,6,7,8],
	[9, 10, 11, 12],
	[13, 14, 15,16],
  ];
// [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
  let  array_masalah2= [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
  ]
// [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]  


function polaSpiral(arr) {
    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        answer.push(element[element.length-1]);
        if (i === arr.length-1) {
            for (let j = arr[i].length-2; j >= 0; j--) {
                const element = arr[j];
                answer.push(arr[i][j]);
                if (j === 0) {
                    for(let k = arr.length-2; k > 0; k--) {
                        answer.push(arr[k][0])
                        if (k === 1) {
                          for (let l = 1; l<arr[1].length-1; l++) {
                            answer.push(arr[k][l])
                            if (l === arr[1].length-2) {
                                for (let m = l; m > 0; m--) {
                                  answer.push(arr[k+1][m])
                                }
                            }
                          }
                        }
                    }
                }
            }  
        }
    }
    console.log(answer);
    // return answer
}

polaSpiral(array_masalah)
polaSpiral(array_masalah2)