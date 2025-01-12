function add(a, b) {
      return a + b;
}
function subtract(a, b) {
      return a - b;
}
function multiply(a, b) {
      return a * b;
}
function divide(a, b) {
      if (b === 0) {
            throw new Error("Division by zero is not allowed.");
      }
      return a / b;
}

console.log("Add: " + add(5, 300));
console.log("Subtract: " + subtract(5,77));
console.log("Multiply: " + multiply(5,98));
console.log("Divide: " + divide(12,9));