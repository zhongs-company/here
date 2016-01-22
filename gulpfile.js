var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('sever', function(){
	var files = [
		'./**/*.html',
		'./css/**/*.css',
		'./images/**/*.*',
		'./js/**/*.js',
		'./sass/**/*.scss'
	];
	browserSync.init(files, {
		server: { 
			baseDir: './'
		}
	});
	gulp.watch('./sass/**/*.scss', ['sass']);

});

gulp.task('sass',function(){
	gulp.src('./sass/mainstyle.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest('./css/'))
});

gulp.task('default',['sever']);  

