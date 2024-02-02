'use strict';

const reverseString = (string) => {

  return string.split("").reverse().join("");
}

console.log(`результат реверса текста: ${reverseString("Привет мир")}`);
