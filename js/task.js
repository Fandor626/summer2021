const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieAnswer1 = prompt('Один из последних просмотренных фильмов'),
    markAnswer1 = prompt('на сколько оцените его?'),
    movieAnswer2 = prompt('Один из последних просмотренных фильмов'),
    markAnswer2 = prompt('на сколько оцените его?');

    personalMovieDB.movies[movieAnswer1]=markAnswer1;
    personalMovieDB.movies[movieAnswer2]=markAnswer2;
    console.log(personalMovieDB);

