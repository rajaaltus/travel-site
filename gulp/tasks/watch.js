var gulp = require('gulp');
var watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(){

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){

		browserSync.reload();

	});

	watch('./app/assets/scss/**/*.css', function(){

		gulp.start('cssInject');

	})

});

gulp.task('cssInject', ['styles'],function(){

	return gulp.src('./app/css/styles/styles.css')
		.pipe(browserSync.stream());

});