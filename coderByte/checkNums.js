function CheckNums(num1, num2) {
    if (num2 > num1) {
        return true
    } else if (num1 > num2) {
        return false
    } else {
        return -1
    }
}


// keep this function call here
CheckNums(readline());
