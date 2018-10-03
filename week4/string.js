var arr = ['a','b','w','y','o']
arr.sort
console.log(arr.sort(function (a,b) {
    return (a<b)
}));
