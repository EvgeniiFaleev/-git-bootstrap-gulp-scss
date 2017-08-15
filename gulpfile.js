var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require('browser-sync').create();

gulp.task("sass", function(){
	return gulp.src("project/sass/*.scss")
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest("project/css"))
  .pipe(browserSync.stream());
}); 

gulp.task("serve", ['sass'], function(){


browserSync.init({
    server:  'project/'

    });

	gulp.watch('project/sass/*.scss', [sass]);
  gulp.watch("project/*.html").on('change', browserSync.reload);
});


  
// gulp.task('browser-sync', function () {
//   var files = [
//    'project/*.html',
//     'project/css/*.css',
//     'project/img/*.jpg',
//     'project/img/*.png',
//     'project/js/*.js'
//   ];
  
//   browserSync.init(files, {
//     server: {
//       baseDir: 'project/'
//     }
//   });
// });


gulp.task("default", ["serve"]);