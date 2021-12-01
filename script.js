'use strict';

let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
while (numberOfFilms === null || numberOfFilms.length > 50 || isNaN(+numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
}

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count == 0) {
    alert('Чем Вы вообще занимаетесь?');
} else if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    alert('Вы посмотрели довольно мало фильмов.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Что ж, о Вас можно сказать, что Вы классический зритель.');
} else if (personalMovieDB.count > 30) {
    alert('Да Вы киноман!');
} else {
    alert('Произошла ошибка.');
}

for (let i = 0; i < 2; i++) {
    let lastMovieName = prompt('Один из последних просмотренных фильмов?', '');
    if (!lastMovieName || lastMovieName.length > 50) {
        i--;
        continue;
    }

    let lastMovieRate = +prompt('На сколько оцените его?', '');
    while (!lastMovieRate || 
        String(lastMovieRate).length > 50 || 
        (lastMovieRate > 10 && lastMovieRate < 1) || 
        isNaN(lastMovieRate)) {
        lastMovieRate = +prompt('На сколько оцените его?', '');
    }

    personalMovieDB.movies[lastMovieName] = lastMovieRate;
}

console.log(personalMovieDB);