const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const hash = require("gulp-hash");
const del = require("del");
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');

// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/css"))
});

// Compile SCSS files to CSS
gulp.task("scss", function () {
    del(["static/css/**/*"])
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({outputStyle : "compressed"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))
        .pipe(hash())
        .pipe(gulp.dest("static/css"))
        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("data/css"))
})

// Hash images
gulp.task("images", function () {
    del(["static/images/**/*"])
    gulp.src("src/images/**/*")
        .pipe(hash())
        .pipe(gulp.dest("static/images"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/images"))
})

// // Hash javascript
// gulp.task("js", () => {
//     del(["static/js/**/*"])
//     gulp.src("src/js/**/*")
//         .pipe(hash())
//         .pipe(gulp.dest("static/js"))
//         .pipe(hash.manifest("hash.json"))
//         .pipe(gulp.dest("data/js"))
// })

gulp.task('js', () => {
	return browserify({
		entries: ['src/js/main.js'],
		debug: true,
		compress: {
			sequences: true,
			dead_code: true,
			booleans: true
		}
	})
    .transform(babelify.configure({
	presets : ['es2015']
    }))
    .bundle()
    .pipe(source('main.js'))
    .pipe(hash())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('static/js'))
    .pipe(hash.manifest("hash.json"))
    .pipe(gulp.dest("data/js"))
});

// Watch asset folder for changes
gulp.task("watch", ["scss", "images", "js"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
    gulp.watch("src/js/**/*", ["js"])
})

// Set watch as default task
gulp.task("default", ["watch"])