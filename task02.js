'use strict';

const isPrime = (number) => {

  for (let i = 2; i < number; i++) {
    if (number % i !== 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(`результат проверки на простое число: ${isPrime(911)}`);