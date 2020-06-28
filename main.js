// Функции генераторы
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const SYMBOLS = "~!@#$%^&*()_-+=[]{}<>/,.";
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}
