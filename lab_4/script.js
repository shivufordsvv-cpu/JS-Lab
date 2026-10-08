/*
CS302JSC — JavaScript Practical Lab Session 4
Making Decisions in Code: if-else & switch-case
BCA / BIT — Semester 5 | Dev Sanskriti Vishwavidyalaya

Complete assignment solution.
Run with:
  node script.js
or open index.html in a browser and check the browser console.
*/

console.log("==============================================");
console.log("CS302JSC - PRACTICAL LAB SESSION 4");
console.log("==============================================");

// --------------------------------------------------
// PART 0 — From Ternary to if-else
// --------------------------------------------------
console.log("\n--- PART 0: Ternary vs if-else ---");

let marks = 68;
let result = marks >= 40 ? "Pass" : "Fail";
console.log("Ternary result:", result);

let marks2 = 68;
if (marks2 >= 40) {
  console.log("if-else result: Pass");
} else {
  console.log("if-else result: Fail");
}

// Task 0.1 answer:
// Both examples print the same answer: Pass.
// I find if-else easier to read because it is clearer when more than one
// statement needs to be executed.

// --------------------------------------------------
// PART 1 — The if Statement
// --------------------------------------------------
console.log("\n--- PART 1: if statement ---");

// Task 1.1
function checkPass(marks) {
  if (marks >= 40) {
    console.log(`Marks ${marks}: You passed!`);
  }
}

checkPass(75);
checkPass(32);

// Task 1.2
function movieAccess(age) {
  if (age >= 18) {
    console.log(`Age ${age}: You can watch this movie`);
  }
}

movieAccess(10); // child
movieAccess(16); // teenager
movieAccess(21); // adult

// --------------------------------------------------
// PART 2 — if-else
// --------------------------------------------------
console.log("\n--- PART 2: if-else ---");

// Task 2.1
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number}: Even number`);
  } else {
    console.log(`${number}: Odd number`);
  }
}

evenOrOdd(7);
evenOrOdd(12);
evenOrOdd(25);

// Task 2.2 — ATM PIN Checker
function checkPin(correctPin, guess) {
  if (guess === correctPin) {
    console.log(`PIN ${guess}: Access Granted`);
  } else {
    console.log(`PIN ${guess}: Access Denied`);
  }
}

checkPin(1234, 1234);
checkPin(1234, 9999);

// Task 2.3 — Pass/Fail using if-else
function passFail(marks) {
  if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log("Pass/Fail using if-else:", passFail(68));

// --------------------------------------------------
// PART 3 — if-else-if
// --------------------------------------------------
console.log("\n--- PART 3: if-else-if ---");

// Task 3.1 — Movie Ticket Price
function movieTicketPrice(age) {
  if (age < 5) {
    return "Free";
  } else if (age < 12) {
    return "Rs. 100";
  } else if (age < 60) {
    return "Rs. 250";
  } else {
    return "Rs. 150";
  }
}

[3, 8, 18, 45, 65].forEach(age => {
  console.log(`Age ${age}: ${movieTicketPrice(age)}`);
});

// Task 3.2 — Weather Advice Bot
function weatherAdvice(temperature) {
  if (temperature > 35) {
    return "It's hot! Drink water.";
  } else if (temperature > 20) {
    return "Nice weather!";
  } else if (temperature > 10) {
    return "A bit cold. Wear a jacket.";
  } else {
    return "Very cold! Stay warm.";
  }
}

[40, 25, 15, 5].forEach(temp => {
  console.log(`${temp}°C: ${weatherAdvice(temp)}`);
});

// --------------------------------------------------
// PART 4 — switch-case
// --------------------------------------------------
console.log("\n--- PART 4: switch-case ---");

// Task 4.1 — 7 days
function getDay(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

[1, 2, 3, 4, 5, 6, 7, 8].forEach(day => {
  console.log(`Day ${day}: ${getDay(day)}`);
});

// Task 4.2 — Mood Emoji Switch
function moodMessage(mood) {
  switch (mood) {
    case "happy":
      return "😊 Keep smiling!";
    case "sad":
      return "😢 It is okay to take a break.";
    case "angry":
      return "😠 Take a deep breath and calm down.";
    case "tired":
      return "😴 Get some rest.";
    default:
      return "🙂 Mood not recognized.";
  }
}

["happy", "sad", "angry", "tired", "excited"].forEach(mood => {
  console.log(`${mood}: ${moodMessage(mood)}`);
});

// Task 4.3 — Missing break experiment
function missingBreakExperiment(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      // break intentionally removed
    case 2:
      console.log("Tuesday");
      break;
    default:
      console.log("Another day");
  }
}

console.log("Missing-break experiment with day = 1:");
missingBreakExperiment(1);
// Explanation: Without break, execution falls through from case 1 into case 2.
// The break stops the switch from continuing into the next case.

// --------------------------------------------------
// PART 5 — Mini Project: Simple ATM Machine
// --------------------------------------------------
console.log("\n--- PART 5: SIMPLE ATM MACHINE ---");

function atmMachine(correctPin, enteredPin, initialBalance, choice, amount = 0) {
  let balance = initialBalance;

  if (enteredPin !== correctPin) {
    console.log("Wrong PIN. Access Denied.");
    return;
  }

  switch (choice) {
    case 1:
      console.log(`Current balance: ${balance}`);
      break;

    case 2:
      if (amount > balance) {
        console.log("Insufficient funds.");
      } else {
        balance -= amount;
        console.log(`Withdrawal successful. New balance: ${balance}`);
      }
      break;

    case 3:
      balance += amount;
      console.log(`Deposit successful. New balance: ${balance}`);
      break;

    default:
      console.log("Invalid choice");
  }
}

// Required tests
console.log("Test A — Wrong PIN");
atmMachine(1234, 9999, 5000, 1);

console.log("Test B — Correct PIN + withdrawal greater than balance");
atmMachine(1234, 1234, 5000, 2, 7000);

console.log("Test C — Correct PIN + successful deposit");
atmMachine(1234, 1234, 5000, 3, 2000);

// Additional tests
console.log("Test D — Correct PIN + check balance");
atmMachine(1234, 1234, 5000, 1);

console.log("Test E — Correct PIN + successful withdrawal");
atmMachine(1234, 1234, 5000, 2, 1500);

console.log("Test F — Invalid menu choice");
atmMachine(1234, 1234, 5000, 9);

// --------------------------------------------------
// PART 6 — Debugging Challenge
// --------------------------------------------------
console.log("\n--- PART 6: DEBUGGING CHALLENGE ---");

// Snippet 1 — fixed
let age = 15;
if (age === 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
// Bug: = is assignment, not comparison.
// Change: = was replaced with ===.

// Snippet 2 — fixed
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Red fruit");
    break;
  case "banana":
    console.log("Yellow fruit");
    break;
  default:
    console.log("Unknown fruit");
}
// Bug: missing break after the apple case.
// Change: added break so execution does not fall through to banana.

// Snippet 3 — fixed
let choice = "2";
switch (choice) {
  case "1":
    console.log("One");
    break;
  case "2":
    console.log("Two");
    break;
  default:
    console.log("Invalid");
}
// Bug: choice is a string, but the cases were numbers.
// Change: changed case 1/2 to case "1"/"2" so the types match.

// --------------------------------------------------
// END
// --------------------------------------------------
console.log("\n==============================================");
console.log("LAB 4 COMPLETE");
console.log("==============================================");
