var gulp = require('gulp'),
    pug = require('gulp-pug'),
    styl = require('gulp-stylus'),
    maps = require('gulp-sourcemaps'),
    vend = require('gulp-autoprefixer'),
    plumb = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var path = {
    src : {
        pug : 'src/pug/pages/*.pug',
        styl : 'src/static/stylus/*.styl',
        fonts : 'src/static/fonts/**/*',
        image : 'src/static/image/**/**/**/*',
        script : 'src/static/script/*.js'
    },
    build : {
        pug : 'build/',
        styl : 'build',
        fonts : 'build/fonts/',
        image : 'build/image/',
        script : 'build/'
    },
    watch : {
        pug : 'src/pug/**/*.pug',
        styl : 'src/static/stylus/**/**/**/**/*.styl',
        fonts : 'src/static/fonts/**/*',
        image : 'src/static/image/**/**/**/*',
        script : 'src/static/script/*.js'
    }
}

gulp.task('pug', () => {
    return gulp.src(path.src.pug)
               .pipe(plumb())
               .pipe(pug({
                   pretty : true
               }))
               .pipe(gulp.dest(path.build.pug))
});

gulp.task('styl', () => {
    return gulp.src(path.src.styl)
               .pipe(plumb())
               .pipe(maps.init())
               .pipe(styl({
                   compress : true,
                   'include css' : true
               }))
               .pipe(vend())
               .pipe(maps.write())
               .pipe(gulp.dest(path.build.styl))
});

gulp.task('script', () => {
    return gulp.src(path.src.script)
               .pipe(plumb())
               .pipe(uglify())
               .pipe(concat('main.js'))
               .pipe(gulp.dest(path.build.script))
});

gulp.task('fonts', () => {
    return gulp.src(path.src.fonts)
               .pipe(gulp.dest(path.build.fonts))
});

gulp.task('img', () => {
    return gulp.src(path.src.image)
               .pipe(gulp.dest(path.build.image))
});

gulp.task('watch', () => {

    gulp.watch(path.watch.pug, gulp.series('pug'))
    gulp.watch(path.watch.styl, gulp.series('styl'))
    gulp.watch(path.watch.fonts, gulp.series('fonts'))
    gulp.watch(path.watch.image, gulp.series('img'))
    gulp.watch(path.watch.script, gulp.series('script'))

});

gulp.task('default', gulp.parallel(gulp.series( 'pug', 'styl', 'fonts', 'img', 'script'), 'watch'));