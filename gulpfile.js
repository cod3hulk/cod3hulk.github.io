var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var src = {
    html: '**/*.html',
    css: '**/*.css',
};

gulp.task('serve', function() {
    browserSync({
        server: {
          baseDir: './'
        },
        logLevel: 'debug',
        logConnections: true
    });
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.css).on('change', reload);
})

gulp.task('watch', ['serve']);
