/* Кавычки */

let single = 'single-quoted';
let double = 'double-quoted';

let guestList = `можно писать
  на разных строчках
  и вставлять произвольные выражения ${single + double}
`;

/* Длина строки */

// Свойство length содержит длину строки:
console.log(`My\n`.length); // 3
//str.length — это числовое свойство, а не функция, добавлять скобки не нужно.

/* Доступ к символам */

let str = `Hello`;
// получаем первый символ
console.log(str[0]); // H
console.log(str.charAt(0)); // H
// получаем последний символ
console.log(str[str.length - 1]); // o

//Также можно перебрать строку посимвольно, используя for..of:
for (let char of 'Hello') {
  console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
}
