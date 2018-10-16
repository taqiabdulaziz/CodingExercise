const phi = 3.14;
const power = 2;
let radius = 14;
const calculateArea = (radius) => phi * Math.pow(radius, power);

radius = 21;
let area21 = calculateArea(radius);

radius = 7;
let area7 = calculateArea(radius);

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//2

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const doubleMe = (num) => num * 2;


console.log(multiply(5,2));
console.log(divide(10,2));

