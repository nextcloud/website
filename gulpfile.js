let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let hash = require("gulp-hash");
let del = require("del");

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

// Hash javascript
gulp.task("js", function () {
    del(["static/js/**/*"])
    gulp.src("src/js/**/*")
        .pipe(hash())
        .pipe(gulp.dest("static/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/js"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "images", "js"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
    gulp.watch("src/js/**/*", ["js"])
})

// Set watch as default task
gulp.task("default", ["watch"])