let name = "Ri";
let age = 18;
console.log("Name:", name);
console.log("Age:", age);

let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let undefinedVar;
console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);
console.log("Undefined:", undefinedVar);

let RollNumber = 15;
if (RollNumber > 10) {
    console.log("The RollNumber is greater than 10");
}

let isMember = true;
if (isMember) {
    console.log("Member discount applied.");
}

let startValue = 50;
if (startValue > 0) {
    console.log("The value is positive.");
} else if (startValue < 0) {
    console.log("The value is negative.");
} else {
    console.log("The value is zero.");
}

let a = 10;
let b = 20;
console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

let firstName = "John";
let lastName = "Doe";
let myAge = 25;
console.log(`Hello, ${firstName} ${lastName}, you are ${myAge} years old.`);

let num = 50;
if (num > 0 && num < 100) {
    console.log("The number is within range.");
}

let hasCar = true;
let hasLicense = true;
let hasInsurance = true;
if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}

num = 21;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80 && score <= 89) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
