'use strict';

let numberOfFilms;

start();

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.private);
writeYourGenres();

function start() {
    numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (!numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovieName = prompt('Один из последних просмотренных фильмов?', '');
        if (!lastMovieName || lastMovieName.length > 50 || Number.isInteger(+lastMovieName)) {
            i--;
            continue;
        }
    
        let lastMovieRate = +prompt('На сколько оцените его?', '');
        while (!lastMovieRate || 
            (lastMovieRate > 10 || lastMovieRate < 1) || 
            isNaN(lastMovieRate)) {
            lastMovieRate = +prompt('На сколько оцените его?', '');
        }
    
        personalMovieDB.movies[lastMovieName] = lastMovieRate;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count == 0) {
        console.log('Вы не смотрели ни одного фильма.');
    } else if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        console.log('Вы посмотрели довольно мало фильмов.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Что ж, о Вас можно сказать, что Вы классический зритель.');
    } else if (personalMovieDB.count > 30) {
        console.log('Да Вы киноман!');
    } else {
        console.log('Произошла ошибка.');
    }
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}