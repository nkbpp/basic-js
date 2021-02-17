'use strict';
/* 1 ПЕРЕМЕННЫЕ */
var a = 1; // старая форма вылазит за область видимости
const b = 2; // константа
let c = 3; // норм

//можно делать и так
let user = 'John',
  age = 25,
  message = 'Hello';
// or
let a1, b1, c1;
a1 = b1 = c1 = 2 + 2; //Присваивание по цепочке
//Деструктурирующее присваивание
let decarr = ['Ilya', 'Kantor']; // записывает firstName=decarr[0], surname=decarr[1]
let [firstName, surname] = decarr;
console.log(firstName); // Ilya
console.log(surname); // Kantor

let bool = true;
let firstName = `Александр ${bool}`;

// console.log(firstName);

/* В JavaScript есть 8 основных типов.

    number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
    bigint для целых чисел произвольной длины.
    string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
    boolean для true/false.
    null для неизвестных значений – отдельный тип, имеющий одно значение null.
    undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
    object для более сложных структур данных.
    symbol для уникальных идентификаторов. */

/* ПРЕОБРАЗОВАНИЯ */
// СТРОКИ String(value)
// Преобразование происходит очевидным образом. false становится "false", null становится "null" и т.п.
// console.log('asd ' + undefined);
// console.log('asd ' + -Infinity);

// ЧИСЛА Number("something") или +(унарный)
// Значение 	    Преобразуется в…
// undefined 	    NaN
// null             0
// true / false 	1 / 0
// string 	        Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.

// boolean Boolean(value) или !!
// Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
// Все остальные значения становятся true. Заметим, что строчка с нулём "0" — это true

// console.log('' + 1 + 0);
// console.log('' - 1 + 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log('  -9  ' - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(' \t \n' - 2);

/* СРАВНЕНИЕ РАЗНЫХ ТИПОВ */

// При сравнении значений разных типов JavaScript приводит каждое из них к числу.
console.log(5 > 4);
console.log('ананас' > 'яблоко');
console.log('2' > '12');
console.log(undefined == null);
console.log(undefined === null);
console.log(null == '\n0\n');
console.log(null === +'\n0\n');

// let f = 1 || 5;
// console.log(f);

// Оператор объединения с null '??'

// result = a ?? b
// result = (a !== null && a !== undefined) ? a : b;

/* ОПЦИОНАЛЬНАЯ ЦЕПОЧКА */

// Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если часть перед ?. имеет значение undefined или null
let user = {}; // пользователь без адреса
console.log(user?.address?.['street']); // undefined (без ошибки)
