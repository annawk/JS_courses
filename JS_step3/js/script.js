/* Задание на урок:
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    // цикл будет выполняться пока одно из условий будет правдивым.
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        // пока вводится пустая строка или пользователь нажал отмену или пользователь ввел буквы

        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start ();




const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const   a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените фильм?", "");
        
        if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
    // если пользователь не нажал отмену на вопрос а, на вопрос б, и не отправил пустую строку и не ввел больше 50 симво
            personalMovieDB.movies[a] = b;
            console.log('done'); // это для наглядности работы цикла в консоли.
        } else {
            console.log('error');
            i--; // если пользователь не выполнил условия то возвращаем цикл на наг назад
        }
    }
}
/* rememberMyFilms (); */
  
/* Второй вариант решения 2й задачки.
let i = 0;
do {
    const   a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените фильм?", "");
            i++;
    if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done'); 
    } else {
        console.log('error');
        i--; 
    }
} while (i < 2); */

/* Третий способ решения 2й задачи
let i = 0;
while ( i < 2 ) {
    const   a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените фильм?", "");
            i++;
    if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done'); 
    } else {
        console.log('error');
        i--; 
    }
} */


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

/* detectPersonalLevel (); */

function showMyDB (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);  
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <=3; i++) {     // i = 1 т.к. для пользователя привычно начинать счет с 1, а не с 0
        personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
        // i-1 т.к. запись в массиве начинается с 0, если оставить i то будет пустая ячейка с значением empty
    }
}

/* function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const gener = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = gener;

    }
} */

writeYourGenres();

