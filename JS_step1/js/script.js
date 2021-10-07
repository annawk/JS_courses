"use strict";

/* let number = 5;
const leftBorderWidth = 1;

number = 3;
console.log(number);

const obj = {
    name: "Masha",
    age: 24,
}; 

console.log(obj.age);  */

/* let arr = ['plum.png', 'apple.jpg', 6];
console.log(arr[2]); */

/* alert('hello'); */

/* const result = confirm('Do you like coffee?');
console.log(result); */ 

/* const answer = [];

answer[0] = prompt('сколько вам лет?', '');
answer[1] = prompt('любите красный?', 'да');
answer[2] = prompt('нравится синий?', '');

document.write(answer); */

/* const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Misha';

alert(`Hello, ${user}!`); */

/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените фильм?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените фильм?", "");

personalMovieDB.movies[a] = b; // писать надо квадратные скобки, во избежания ошибок вывода в разных браузерах.
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/* let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr); */

/* const isChecked = true,
      isClose = false;

console.log(isChecked && isClose); */

/* if (4==9) {
    console.log('ok');
} else {
    console.log('Error');
} */

/* const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 70) {
    console.log('Много');
} else {
    console.log('ok');
}

const num = 50;

(num === 50) ? console.log('ok') : console.log('Error'); */

/* const num = 50;

switch (num) {
        case 49:
            console.log('Неверно');
            break;
        case 100:
            console.log('неверно');
            break;
        case 50:
            console.log('Верное');
            break;
        default:
            console.log('Не в этот раз');
            break;
} */

/* let num = 50;

while ( num < 55) {
    console.log(num);
    num++;
}

let num = 50;

do {
    console.log(num);
    num++;
} while ( num < 55);

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) 
    console.log(i); 
}
 */

let num = 1708 % 2;
console.log(num);