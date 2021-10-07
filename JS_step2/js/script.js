/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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





 if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


// второй вариант решения 3й задачи.
/* (personalMovieDB.count < 10) ? console.log("Просмотрено довольно мало фильмов") : 
(personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? console.log("Вы классический зритель") :
(personalMovieDB.count >= 30) ? console.log("Вы киноман") :
console.log("Произошла ошибка"); */

console.log(personalMovieDB);

