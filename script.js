'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (!personalMovieDB.count || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
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
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt('Введите Ваши любимые жанры через запятую.', '');
            if (!genres || genres.length > 50 || Number.isInteger(+genres)) {
                i--;
            } else {
                personalMovieDB.genres = genres.toLowerCase().split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}.`);
        });
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        //     if (!genre || genre.length > 50 || Number.isInteger(+genre)) {
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        // }
        // personalMovieDB.genres.forEach(function(item, i) {
        //     console.log(`Любимый жанр #${i + 1} - это ${item}.`);
        // });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.private = !personalMovieDB.private;
        // if (personalMovieDB.private) {
        //     personalMovieDB.private = false;
        // } else {
        //     personalMovieDB.private = true;
        // }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres(personalMovieDB.genres);
// personalMovieDB.showMyDB(personalMovieDB.private);
// personalMovieDB.toggleVisibleMyDB();