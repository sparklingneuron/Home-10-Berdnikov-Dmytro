function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function expo(num1, num2) {
  return num1 ** num2
}

function root(num1) {
  return Math.sqrt(num1)
}

function cosine(num1) {
  return Math.cos(num1)
}

function sinus(num1) {
  return Math.sin(num1)
}

function factorial(num1) {
  if (num1 < 0) {
    return 'wrong argument. numbers below 0 are not allowed'
  } else if (num1 === 0 || num1 === 1) {
    return 1
  } else {
    return num1 * factorial(num1 - 1)
  }
}

//tests
console.log('= test addition: =')
console.log(add(5, 5))
console.log('= test subtraction: =')
console.log(subtract(25, 5))
console.log('= test multiplication: =')
console.log(multiply(5, 5))
console.log('= test division: =')
console.log(divide(25, 3))
console.log('= test power: =')
console.log(expo(5, 3))
console.log('= test root: =')
console.log(root(25))
console.log('= test cosine: =')
console.log(cosine(5))
console.log('= test sinus: =')
console.log(sinus(5))

//tests for the factorial function
console.log('= tests for the factorial function: =')
console.log(factorial(-1))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(8))