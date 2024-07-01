// 1 task

let country = "Ukraine";
let city = "Mariupol";
let address = "Karpenko st";

let fullAddress = `${country}, ${city}, ${address}`;

console.log(fullAddress);

// 2 task

let height = 10;
let width = 20;

let area = height * width;

console.log(area);

// 3 task

let num = 17;
let degree = 6;

let result = Math.pow(num, degree);

console.log(result);

// 4 task

console.log(Math.floor(Math.random() * 70));

//5 task

let number = 10;
console.log(number % 2 === 0 ? "even" : "not even");

//6 test

let text = "100$";

text = text.includes("$") ? text.replace("$", "€") : text;

console.log(text);

//7 test

let monthNumber = 10;

switch (monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("Jule");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("wrong month number");
}

// 8 task

let password = prompt("Enter your password");

password = password.trim();

let hasAndSymbol = password.includes("&");
let hasHashSymbol = password.includes("#");

let message =
  password.length > 10 && hasAndSymbol && hasHashSymbol
    ? "You have strong password"
    : "please change your password.";

console.log(message);

// 9 task

let a = 10;
let b = 20;

console.log(
  typeof a === "number" && typeof b === "number"
    ? a + b
    : "Sum of those items can’t be counted"
);
