function calculateArea(length, width) {
  return length * width;
}
console.log(calculateArea(5, 3));

function isAdult(age) {
  return age >= 18;
}
console.log(isAdult(16));
console.log(isAdult(18));
console.log(isAdult(22));

function calculateDiscount(price, isMember) {
  if (isMember) {
    return price * 0.9;
  }
  return price;
}
console.log(calculateDiscount(1200, true));
console.log(calculateDiscount(1200, false));

const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5));

const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(4, 5));

const isAdultExpression = function(age) {
  return age >= 18;
};
console.log(isAdultExpression(17));
console.log(isAdultExpression(20));

const square = n => n * n;
console.log(square(5));
console.log(square(8));
console.log(square(11));

const fullName = (first, last) => first + " " + last;
console.log(fullName("Shivanshu", "Rastogi"));
console.log(fullName("Aarav", "Sharma"));

function greetUser(name = "Guest") {
  console.log("Welcome, " + name);
}
greetUser("Aditi");
greetUser();

function calculatePrice(price, tax = 0.18) {
  return price + (price * tax);
}
console.log(calculatePrice(500, 0.05));
console.log(calculatePrice(500));

console.log(calculateArea(5));
console.log("Calling calculateArea with one argument gives NaN because width defaults to undefined and multiplying a number with undefined produces NaN.");

let storeName = "QuickMart";
function printReceipt() {
  console.log("Thank you for shopping at " + storeName);
}
printReceipt();

let taxRate = 0.18;
function finalPrice(amount) {
  return amount + (amount * taxRate);
}
console.log(finalPrice(1500));

let cityName = "Haridwar";
function displayCity() {
  let cityName = "Rishikesh";
  console.log(cityName);
}
displayCity();
console.log(cityName);
console.log("The local variable inside the function shadows the global variable with the same name.");
console.log("The global variable did not change and still retains its original value.");

if (true) {
  let discountApplied = true;
  console.log(discountApplied);
}
console.log(typeof discountApplied);

if (true) {
  let campusName = "Dev Sanskriti Vishwavidyalaya";
  console.log(campusName);
}
console.log(typeof campusName);

if (true) {
  var hostelName = "Ganga Hostel";
  console.log(hostelName);
}
console.log(hostelName);
console.log("Variables declared with var are function scoped and ignore block boundaries.");
console.log("Because of this hostelName remains accessible outside the if block.");

let status = "pending";
function checkOrder() {
  function confirmOrder() {
    console.log(status);
  }
  confirmOrder();
}
checkOrder();

function studentProfile() {
  let studentName = "Shivanshu";
  function showDetails() {
    let course = "BIT";
    console.log(studentName + " is enrolled in " + course);
  }
  showDetails();
}
studentProfile();

let role = "guest";
function loginAsAdmin() {
  let role = "admin";
  console.log(role);
}
loginAsAdmin();
console.log(role);

let totalFeeCollected = 0;

function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else {
    return "F";
  }
}

const calculateLateFee = function(daysLate = 0) {
  return daysLate * 10;
};

const processStudent = (name, marks, daysLate = 0) => {
  let grade = calculateGrade(marks);
  let fee = calculateLateFee(daysLate);
  totalFeeCollected += fee;
  console.log(name + " - Grade " + grade + ", Late Fee Rs." + fee + ".");
};

processStudent("Aditi", 92, 0);
processStudent("Rohit", 68, 3);
processStudent("Meera", 55, 5);
processStudent("Shivanshu", 88);
console.log("Final totalFeeCollected - Rs." + totalFeeCollected);

console.log("Snippet 1 Expected: 8");
console.log("Snippet 1 Actual: undefined");
console.log("Snippet 1 Reason: The function calculates a + b without the return statement.");
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, 3));

console.log("Snippet 2 Expected: Declare and assign a discount variable properly.");
console.log("Snippet 2 Actual: Assigning without let or const accidentally creates an implicit global variable.");
console.log("Snippet 2 Reason: Missing variable declaration keyword inside function.");
function setDiscount() {
  let discount = 20;
  return discount;
}
let currentDiscount = setDiscount();
console.log(currentDiscount);

console.log("Snippet 3 Expected: 800");
console.log("Snippet 3 Actual: 1000");
console.log("Snippet 3 Reason: Parameter balance shadows the outer variable, modifying only the local parameter.");
let balance = 1000;
function withdraw(amount) {
  balance = balance - amount;
  return balance;
}
withdraw(200);
console.log(balance);

console.log("Snippet 4 Expected: Print Hi!");
console.log("Snippet 4 Actual: ReferenceError because sayHello is called before initialization.");
console.log("Snippet 4 Reason: Function expressions assigned to const are not hoisted like function declarations.");
const sayHello = function() {
  console.log("Hi!");
};
sayHello();
