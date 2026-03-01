let str = "Hello"
console.log(str, typeof str);

let num = 12;
console.log(num, typeof num);

const bool = true;
console.log(bool, typeof bool);

let age
console.log(age, typeof age);

const emptyValue = null;
console.log(emptyValue, typeof emptyValue);

let object = {
    name: "Alina",
    age: 27,
}
console.log(object, typeof object);

const colors = ["red", "green", "blue"];
console.log(colors, typeof colors);

const symbol = Symbol("id");
console.log(symbol, typeof symbol);

const bigNumber = 9999999999999999999999999999999n;
console.log(bigNumber, typeof bigNumber);

let a = 5
let b = 5
function multiply (a, b) {
    return a * b
}
console.log(multiply(a, b), typeof multiply);