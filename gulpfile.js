const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemmin = require('gulp-imagemin');

function compileSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function compressJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function compressImg() {
    return gulp.src('./source/images/*')
        .pipe(imagemmin())
        .pipe(gulp.dest('./build/images'));
}

function compressExercicioImgs() {
    return gulp.src('./source/images/exercicio/*')
        .pipe(imagemmin())
        .pipe(gulp.dest('./build/images/exercicio'));
}


// Aulas

// exports.default = function() {
//     gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
//     gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(compressJs));
//     gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(compressImg));
// }


// Exercicio
exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(compressJs));
    gulp.watch('./source/images/exercicio/*', { ignoreInitial: false }, gulp.series(compressExercicioImgs));
}

