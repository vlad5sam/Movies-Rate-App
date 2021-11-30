'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const lastMovieName = +prompt('Один из последних просмотренных фильмов?', ''),
          lastMovieRate = +prompt('На сколько оцените его?', '');

    personalMovieDB.movies[lastMovieName] = lastMovieRate;
}

console.log(personalMovieDB);
