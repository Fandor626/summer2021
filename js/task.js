"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const movieAnswer = prompt('Один из последних просмотренных фильмов'),
        markAnswer = prompt('на сколько оцените его?');

    if (movieAnswer != null && markAnswer != null && markAnswer != '' && movieAnswer != '' && movieAnswer.length < 50) {
        personalMovieDB.movies[movieAnswer] = markAnswer;
        console.log('done');
    }
    else
    {
        console.log("eror");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);