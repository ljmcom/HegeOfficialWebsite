
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

// 目录
var app = {
  srcPath : 'src/',
  devPath : 'build/',
  prdPath : 'dist/'
}

gulp.task('lib',function(){
  gulp.src('lib/**/*.js')
  .pipe(gulp.dest(app.devPath + 'vendor'))
  .pipe(gulp.dest(app.prdPath + 'vendor'))
  .pipe($.connect.reload())
})

gulp.task('html',function(){
  gulp.src(app.srcPath + '**/*.html')
  .pipe(gulp.dest(app.devPath))
  .pipe(gulp.dest(app.prdPath))
  .pipe($.connect.reload())
})

gulp.task('css',function(){
  gulp.src(app.srcPath + 'style/*.css')
  .pipe($.cssnano())
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin())
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload())
})

gulp.task('js',function(){
  gulp.src(app.srcPath + 'script/**/*.js')
  .pipe($.concat('index.js'))
  .pipe(gulp.dest(app.devPath + 'js'))
  .pipe($.uglify())
  .pipe(gulp.dest(app.prdPath + 'js'))
  .pipe($.connect.reload());
})


gulp.task('image',function(){
  gulp.src(app.srcPath + 'image/**/*')
  .pipe(gulp.dest(app.devPath + 'image'))
  .pipe($.image())
  .pipe(gulp.dest(app.prdPath + 'image'))
  .pipe($.connect.reload());
})

// 打包项目
gulp.task('build',['image','js','css','lib','html'])
//
// gulp.task('clean',function () {
//   gulp.src([app.devPath,app.prdPath])
//   .pipe($.clean())
// })
//
// gulp.task('server',['build'],function () {
//   $.connect.server({
//     root:[app.devPath],
//     livereload : true, //自动刷新
//     port:8888
//   })
//
//   open('http://localhost:8888');
//   gulp.watch(app.srcPath +'script/**/*.js',['js']);
//   gulp.watch('lib/**/*',['lib']);
//   gulp.watch(app.srcPath +'**/*.html',['html']);
//   gulp.watch(app.srcPath +'style/**/*.html',['css']);
//   gulp.watch(app.srcPath +'image/**/*',['image']);
// });

// gulp.task('default',['server']);


gulp.task('server', ['build'], function() {
	$.connect.server({
		root: app.devPath,
		livereload: true,
		port: 1234
	});

	open('http://localhost:1234');

	gulp.watch('lib/**/*', ['lib']);
	gulp.watch(app.srcPath + '**/*.html', ['html']);
	gulp.watch(app.srcPath + 'style/**/*.css', ['css']);
	gulp.watch(app.srcPath + 'script/**/*.js', ['js']);

});

gulp.task('default', ['server']);
