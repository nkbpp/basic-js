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

/* Строки неизменяемы */

let strHi = 'Hi';
strHi[0] = 'h'; // ошибка
console.log(strHi[0]); // не работает

/* Изменение регистра */

console.log('Interface'.toUpperCase()); // INTERFACE
console.log('Interface'.toLowerCase()); // interface

/* Поиск подстроки */

// str.indexOf(substr, pos).
//Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений. Необязательный второй аргумент позволяет начать поиск с определённой позиции.
let strIndexOf = 'Widget with id';
console.log(strIndexOf.indexOf('id', 2)); // 12
// str.lastIndexOf(substr, position)
// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

//includes, startsWith, endsWith
//Более современный метод str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
console.log('Widget with id'.includes('Widget')); // true
//Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
console.log('Widget'.startsWith('Wid')); // true, "Wid" — начало "Widget"
console.log('Widget'.endsWith('get')); // true, "get" — окончание "Widget"

/* Получение подстроки */

// метод 	                выбирает… 	                        отрицательные значения
// slice(start, end) 	    от start до end (не включая end) 	  можно передавать отрицательные значения
// substring(start, end) 	между start и end                  	отрицательные значения равнозначны 0
// substr(start, length) 	length символов, начиная от start 	значение start может быть отрицательным
