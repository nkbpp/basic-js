/* 2 Функции */
// Пример объявления функции:
// Function Declaration (Объявление Функции) - можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).
function showMessage() {
  console.log('Всем привет!');
}

// Function Expression (Функциональное Выражение) - создаётся, когда выполнение доходит до него, и затем уже может использоваться.

let sayHi = function () {
  console.log('Привет');
}; // нужна ; это присвоение

/* Параметры */

function showMessage(from, text) {
  // аргументы: from, text
  console.log(from + ': ' + text);
}
/*  Параметры по умолчанию */
// Если параметр не указан, то его значением становится undefined.
function showMessage(from, text = 'текст не добавлен') {
  console.log(from + ': ' + text);
}

/* Возврат значения */
// Функция может вернуть результат, который будет передан в вызвавший её код.
// Результат функции с пустым return или без него – undefined

/*  Функции-«колбэки» */
// Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно (от англ. «call back» – обратный вызов) когда-нибудь позже
/*
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

 ask(
    'Вы согласны?',
    function () {
        console.log('Вы согласились.');
    },
    function () {
        console.log('Вы отменили выполнение.');
    }
); */

//! Функции-стрелки
// let func = (arg1, arg2, ...argN) => expression
// …Такой код создаёт функцию func с аргументами arg1..argN и вычисляет expression с правой стороны с их использованием, возвращая результат.
// Другими словами, это более короткий вариант такой записи:
let func = function (arg1, arg2, ...argN) {
  return expression;
};

//! Многострочные стрелочные функции
let sum = (a, b) => {
  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // при фигурных скобках для возврата значения нужно явно вызвать return
};

// У стрелочных функций нет «this»
//Стрелочные функции нельзя использовать с new
//Стрелочные функции не имеют "arguments"

console.log(sum(1, 2)); // 3

console.log(+sum);

//! Функция-конструктор

// Когда функция вызывается c new, происходит следующее:
//     Создаётся новый пустой объект, и он присваивается this.
//     Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
//     Возвращается значение this

function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function () {
    console.log('Меня зовут: ' + this.name);
  };
}
let user = new User('Вася');
console.log(user.name); // Вася
console.log(user.isAdmin); // false

// Обычно конструкторы ничего не возвращают явно. Их задача – записать все необходимое в this, который в итоге станет результатом.
// Но если return всё же есть, то применяется простое правило:
//     При вызове return с объектом, будет возвращён объект, а не this.
//     При вызове return с примитивным значением, примитивное значение будет отброшено.
//     Кстати, мы можем не ставить скобки после new, если вызов конструктора идёт без аргументов.
let user = new User(); // <-- без скобок то же, что и
let user = new User();
