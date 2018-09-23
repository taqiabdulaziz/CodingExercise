var userQuestion = "awda";
var randomNumber = Math.floor(Math.random() * 7);
var eightBall = "";

console.log(randomNumber);

switch (randomNumber) {
    case 0:
    console.log("It is certain")
    break;

    case 1:
    console.log("it is decidedly so")
    break;

    case 2:
    console.log("Reply hazy try again")
    break;

    case 3:
    console.log("Cannot predict now")
    break;

    case 4:
    console.log("Dont count on it")
    break;

    case 5:
    console.log("My sources say no")
    break;

    case 6:
    console.log("Ooutlook not so good")
    break;

    default :
    console.log("Signs point to yes")
}