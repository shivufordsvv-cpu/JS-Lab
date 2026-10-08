// CS302JSC — JavaScript Practical Lab Session 3
// BCA / BIT — Semester 5
// Dev Sanskriti Vishwavidyalaya

console.log("========== PART 0: QUICK RECAP ==========");

console.log('typeof (10 + "5"):', typeof (10 + "5")); // string
console.log('5 === "5":', 5 === "5"); // false

let x = 10;
x += 5;
console.log("x after x += 5:", x); // 15

console.log("true && false || true:", true && false || true); // true
console.log("10 % 3:", 10 % 3); // 1


console.log("\n========== PART 1: OPERATOR PRECEDENCE ==========");

// Task 1.1
let val = 4 + 3 * 2 ** 2 - 6 / 3;
console.log("Task 1.1:", val); // 14

// Task 1.2
console.log("1 < 2 < 3:", 1 < 2 < 3); // true
console.log("3 > 2 > 1:", 3 > 2 > 1); // false

// Task 1.3
let precedenceExpression = (5 * 2 + 3 === 13) && (10 > 5);
console.log("Task 1.3:", precedenceExpression); // true


console.log("\n========== PART 2: NESTED TERNARY ==========");

// Task 2.1 — Movie Ticket Pricing
function movieTicketPrice(age) {
  return age < 5 ? "Free"
       : age < 12 ? "₹100"
       : age < 60 ? "₹250"
       : "₹150";
}

console.log("Task 2.1 age 3:", movieTicketPrice(3));
console.log("Task 2.1 age 8:", movieTicketPrice(8));
console.log("Task 2.1 age 18:", movieTicketPrice(18));
console.log("Task 2.1 age 59:", movieTicketPrice(59));
console.log("Task 2.1 age 65:", movieTicketPrice(65));

// Task 2.2 — Shipping Cost
function shippingCost(cartTotal) {
  return cartTotal >= 2000 ? "Free Shipping"
       : cartTotal >= 1000 ? "₹50"
       : "₹100";
}

console.log("Task 2.2 ₹2500:", shippingCost(2500));
console.log("Task 2.2 ₹1500:", shippingCost(1500));
console.log("Task 2.2 ₹700:", shippingCost(700));

// Task 2.3 — Ternary + Logical Operator
function getDiscountType(isMember, totalSpent) {
  return (isMember && totalSpent >= 5000) ? "VIP Discount"
       : totalSpent >= 5000 ? "Regular Discount"
       : "No Discount";
}

console.log("Task 2.3 member + ₹6000:", getDiscountType(true, 6000));
console.log("Task 2.3 non-member + ₹6000:", getDiscountType(false, 6000));
console.log("Task 2.3 member + ₹3000:", getDiscountType(true, 3000));


console.log("\n========== PART 3: MANUAL AGGREGATION ==========");

// Task 3.1
const examScores = [55, 72, 38, 64, 91];

const scoreSum =
  examScores[0] +
  examScores[1] +
  examScores[2] +
  examScores[3] +
  examScores[4];

const scoreAverage = scoreSum / examScores.length;
const result = scoreAverage >= 40 ? "Pass" : "Fail";

console.log("Task 3.1 Scores:", examScores);
console.log("Sum:", scoreSum);
console.log("Average:", scoreAverage);
console.log("Result:", result);

// Task 3.2
const item1 = { name: "Notebook", price: 60, qty: 3 };
const item2 = { name: "Pen", price: 10, qty: 5 };
const item3 = { name: "Bag", price: 800, qty: 1 };
const item4 = { name: "Pencil", price: 20, qty: 4 };

const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;
const subtotal4 = item4.price * item4.qty;

const grandTotalPart3 =
  subtotal1 + subtotal2 + subtotal3 + subtotal4;

console.log("Task 3.2 Grand Total:", grandTotalPart3); // 1110


console.log("\n========== PART 4: TYPE COERCION ==========");

console.log('"5" + 3:', "5" + 3); // "53"
console.log('"5" - 3:', "5" - 3); // 2
console.log('"abc" * 2:', "abc" * 2); // NaN
console.log("NaN === NaN:", NaN === NaN); // false
console.log("[] == false:", [] == false); // true
console.log('"10" == 10:', "10" == 10); // true
console.log("null + 1:", null + 1); // 1

console.log("typeof NaN:", typeof NaN); // "number"


console.log("\n========== PART 5: SMART SHOPPING CART & BILLING SYSTEM ==========");

// Three product objects
const product1 = { name: "Notebook", price: 60, qty: 3 };
const product2 = { name: "Pen", price: 10, qty: 5 };
const product3 = { name: "Bag", price: 800, qty: 1 };

// Defensive typeof check
const pricesAreNumbers =
  typeof product1.price === "number" &&
  typeof product2.price === "number" &&
  typeof product3.price === "number";

if (pricesAreNumbers) {
  // Manual aggregation — no loops
  const product1Subtotal = product1.price * product1.qty;
  const product2Subtotal = product2.price * product2.qty;
  const product3Subtotal = product3.price * product3.qty;

  const grandTotal =
    product1Subtotal +
    product2Subtotal +
    product3Subtotal;

  // Tiered discount using nested ternary
  const discountPercent =
    grandTotal >= 5000 ? 20
    : grandTotal >= 2000 ? 10
    : grandTotal >= 1000 ? 5
    : 0;

  const discountAmount = grandTotal * (discountPercent / 100);
  const amountAfterDiscount = grandTotal - discountAmount;

  // 18% GST
  const gstAmount = amountAfterDiscount * 0.18;
  const finalPayable = amountAfterDiscount + gstAmount;

  // Free shipping if either condition is true
  const freeShipping =
    amountAfterDiscount >= 1500 || 3 >= 3;

  console.log("----- RECEIPT -----");
  console.log(`${product1.name}: ₹${product1.price} × ${product1.qty} = ₹${product1Subtotal.toFixed(2)}`);
  console.log(`${product2.name}: ₹${product2.price} × ${product2.qty} = ₹${product2Subtotal.toFixed(2)}`);
  console.log(`${product3.name}: ₹${product3.price} × ${product3.qty} = ₹${product3Subtotal.toFixed(2)}`);
  console.log(`Grand Total: ₹${grandTotal.toFixed(2)}`);
  console.log(`Discount: ${discountPercent}% = ₹${discountAmount.toFixed(2)}`);
  console.log(`Amount After Discount: ₹${amountAfterDiscount.toFixed(2)}`);
  console.log(`GST (18%): ₹${gstAmount.toFixed(2)}`);
  console.log(`Final Payable: ₹${finalPayable.toFixed(2)}`);
  console.log(`Shipping: ${freeShipping ? "FREE" : "₹100 shipping charge"}`);

  // Bonus
  const loyaltyPoints = finalPayable / 100;
  console.log(`Loyalty Points: ${loyaltyPoints}`);
} else {
  console.log("Error: One or more product prices are not Numbers.");
}


console.log("\n========== PART 6: DEBUGGING ==========");

// Snippet 1 — corrected
let price = 500;
let discount = price * 0.1;
discount = discount + 5;
let finalAmount = price - discount;
console.log("Snippet 1 Final:", finalAmount); // 445

// Snippet 2 — corrected
let marks = "85";
let passResult = Number(marks) === 85 ? "Pass" : "Fail";
console.log("Snippet 2 Result:", passResult); // Pass

// Snippet 3 — corrected
let cartTotal = 1200;
cartTotal = cartTotal - 100;
let shipping = cartTotal >= 1500 ? "Free" : "Paid";
console.log("Snippet 3 Shipping:", shipping); // Paid


console.log("\n========== SELF-CHECK ANSWERS ==========");
// 1. 2 + 3 * 4 ** 2 = 50
// 2. 3 > 2 gives true; true > 1 becomes 1 > 1, which is false.
// 3. Exactly ₹2000 gets the 10% discount tier.
// 4. NaN is not equal to itself.
// 5. typeof prevents calculations from using incorrectly typed prices.
// 6. The strict comparison is logically wrong but valid JavaScript, so no syntax/runtime error occurs.
