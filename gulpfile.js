const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


// Copy html
function copyHtml() {
    return src('./src/*.html')
        .pipe(dest('./dist'))
}

// copy assets
function copyAssets() {
    return src('./src/assets/**/*')
        .pipe(dest('./dist'));
}

// compile scss into css
function style() {
    // 1. where is my scss file
    return src('./src/scss/**/*.scss')
        // 2. pass that file through sass compiler
        .pipe(sass().on('error', sass.logError))
        // 3. where do I save that compiled CSS?
        .pipe(dest('./dist/css'))
        // 4. stream changes to all browser
        .pipe(browserSync.stream());
}

// watch for any changes in src folder.
function watchme() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('./src/scss/**/*.scss', style);
    watch('./src/*.html').on('change', series(copyHtml, browserSync.reload));
}

exports.watchme = watchme;

exports.default = series(parallel(copyHtml, style, copyAssets), watchme);


// To run type'gulp' in terminal.
// add '/dist' in the browser.