console.log(score);
var score = 50;
console.log(score);

console.log(city);
var city = "haridwar";
console.log(city);

function showMessage() {
  console.log(message);
  var message = "hello";
  console.log(message);
}
showMessage();

var name = "global";
function test() {
  console.log(name);
  var name = "local";
}
test();

console.log(food);
var food = "pizza";
console.log(food);

console.log(square(4));
function square(n) {
  return n * n;
}

try {
  sayHi();
  var sayHi = function () {
    console.log("hi!");
  };
} catch (err) {
  console.log("typeerror: sayhi is not a function");
}

try {
  sayHiConst();
  const sayHiConst = function () {
    console.log("hi!");
  };
} catch (err) {
  console.log("referenceerror: cannot access sayhiconst before initialization");
}

console.log("function declaration works before its line with no error");
console.log("var function expression gives typeerror");
console.log("const arrow function gives referenceerror");
console.log("let function expression gives referenceerror");

console.log(fnA());
function fnA() {
  return "first";
}
function fnA() {
  return "second";
}

wakeUp();
eatBreakfast();
goToCollege();

function wakeUp() {
  console.log("woke up at 7 am");
}
function eatBreakfast() {
  console.log("ate breakfast");
}
function goToCollege() {
  console.log("went to college");
}
console.log("function declarations are hoisted with both name and body");

try {
  console.log(age);
  let age = 20;
} catch (err) {
  console.log("referenceerror: cannot access age before initialization");
}

try {
  console.log(pi);
  const pi = 3.14;
} catch (err) {
  console.log("referenceerror: cannot access pi before initialization");
}

console.log(typeof x);
var x = 5;

try {
  console.log(typeof y);
  let y = 5;
} catch (err) {
  console.log("referenceerror: cannot access y before initialization");
}

console.log("the three mistakes when using a name too early are: undefined when using var before declaration, referenceerror when using let or const in tdz, typeerror when calling a var function expression before initialization");

console.log(detectiveA);
var detectiveA = 10;

try {
  console.log(detectiveB);
  let detectiveB = 20;
} catch (err) {
  console.log("referenceerror: tdz error");
}

try {
  detectiveC();
  var detectiveC = function () {};
} catch (err) {
  console.log("typeerror: not a function");
}

detectiveD();
function detectiveD() {
  console.log("works perfectly due to hoisting");
}

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counterA = makeCounter();
const counterB = makeCounter();
console.log(counterA(), counterA(), counterA());
console.log(counterB());

const cA = makeCounter();
const cB = makeCounter();
console.log(cA());
console.log(cA());
console.log(cA());
console.log(cA());
console.log(cA());
console.log(cB());
console.log(cB());
console.log("counterb has its own independent closure scope and memory");

try {
  console.log(count);
} catch (err) {
  console.log("referenceerror: count is not defined");
}
console.log("closure variables are private and cannot be accessed outside the function");

function makeMultiplier(n) {
  return function (x) {
    return x * n;
  };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5), triple(5));

function makeGreeter(greeting) {
  return function (person) {
    return greeting + ", " + person + "!";
  };
}
console.log(makeGreeter("namaste")("aditi"));

function makeCupCounter() {
  let count = 0;
  return function () {
    count++;
    return "cup number " + count + " of chai";
  };
}
const rahulChai = makeCupCounter();
const priyaChai = makeCupCounter();
console.log(rahulChai());
console.log(rahulChai());
console.log(priyaChai());
console.log(rahulChai());
console.log(priyaChai());

function createWallet(start) {
  let balance = start;
  return {
    add(n) {
      balance += n;
      return balance;
    },
    spend(n) {
      if (n > balance) return "insufficient balance";
      balance -= n;
      return balance;
    },
    show() {
      return balance;
    }
  };
}

const wallet = createWallet(100);
console.log(wallet.add(50));
console.log(wallet.spend(30));
console.log(wallet.spend(500));
console.log(wallet.show());
console.log(wallet.balance);

wallet.balance = 99999;
console.log(wallet.show());
console.log("the balance variable inside the closure remains unchanged and private");

function createWalletWithReset(start) {
  let balance = start;
  return {
    add(n) {
      balance += n;
      return balance;
    },
    spend(n) {
      if (n > balance) return "insufficient balance";
      balance -= n;
      return balance;
    },
    show() {
      return balance;
    },
    reset() {
      balance = start;
      return balance;
    }
  };
}
const walletReset = createWalletWithReset(100);
console.log(walletReset.add(50));
console.log(walletReset.reset());

function limiter(max) {
  let used = 0;
  return function () {
    if (used < max) {
      used++;
      return "attempt " + used + " of " + max;
    } else {
      return "locked!";
    }
  };
}
const tryLogin = limiter(3);
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());

function createDiary() {
  let entries = [];
  return {
    write(text) {
      entries.push(text);
    },
    read() {
      return entries;
    }
  };
}
const myDiary = createDiary();
myDiary.write("had a great coding session today");
myDiary.write("learned closures and hoisting");
console.log(myDiary.read());
console.log(myDiary.entries);

const withVar = [];
for (var i = 0; i < 3; i++) {
  withVar.push(() => i);
}
console.log(withVar.map(f => f()));

const withLet = [];
for (let j = 0; j < 3; j++) {
  withLet.push(() => j);
}
console.log(withLet.map(f => f()));

console.log("var shares a single binding across loop iterations while let creates a new binding per iteration");

for (let m = 1; m <= 3; m++) {
  console.log("let:", m);
}

const mySmartWallet = createSmartWallet(500);
const guard = createLimiter(3);

console.log(mySmartWallet.add(200));
console.log(guard());
console.log(mySmartWallet.spend(150));
console.log(guard());
console.log(mySmartWallet.spend(1000));
console.log(mySmartWallet.show());
console.log(mySmartWallet.history());

const festive = makeDiscount(10);
console.log(festive(500));
console.log("final balance is " + mySmartWallet.show());

function createSmartWallet(start) {
  let balance = start;
  let logHistory = [];
  return {
    add(n) {
      balance += n;
      logHistory.push("added " + n);
      return balance;
    },
    spend(n) {
      if (n > balance) {
        return "insufficient balance";
      }
      balance -= n;
      logHistory.push("spent " + n);
      return balance;
    },
    show() {
      return balance;
    },
    history() {
      return logHistory;
    }
  };
}

function createLimiter(max) {
  let used = 0;
  return function () {
    if (used < max) {
      used++;
      return "attempt " + used + " of " + max;
    }
    return "locked!";
  };
}

function makeDiscount(percent) {
  return function (amount) {
    return amount - (amount * percent / 100);
  };
}

var total = 5;
console.log(total);

function greet() {
  console.log("hi");
}
greet();

function makeCounterFixed() {
  let c = 0;
  return function () {
    c++;
    return c;
  };
}
const next = makeCounterFixed();
console.log(next(), next());

function makeCounter2Fixed() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const n = makeCounter2Fixed();
console.log(n(), n(), n());
