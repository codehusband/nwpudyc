var gulp = require('gulp');
gulp.task('default',function(){
    console.log('hello gulp');
});

//ʹ������ķ�ʽ��ƥ������ļ�
gulp.src(['js/*.js','css/*.css','*.html']);

gulp.src([*.js,'!b*.js']) //ƥ������js�ļ������ų�����b��ͷ��js�ļ�
gulp.src(['!b*.js',*.js]) //�����ų��κ��ļ�����Ϊ�ų�ģʽ���ܳ���������ĵ�һ��Ԫ����

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify");
 
gulp.task('rename', function () {
    gulp.src('js/jquery.js')
    .pipe(uglify())  //ѹ��
    .pipe(rename('jquery.min.js')) //�Ὣjquery.js������Ϊjquery.min.js
    .pipe(gulp.dest('js'));
    
});

var gulp = require('gulp'),
    uglify = require("gulp-uglify");
 
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // Ҫѹ����js�ļ�
    .pipe(uglify())  //ʹ��uglify����ѹ��,����������ο���
    .pipe(gulp.dest('dist/js')); //ѹ�����·��
});


var gulp = require('gulp'),
    minifyCss = require("gulp-minify-css");
 
gulp.task('minify-css', function () {
    gulp.src('css/*.css') // Ҫѹ����css�ļ�
    .pipe(minifyCss()) //ѹ��css
    .pipe(gulp.dest('dist/css'));
});

var gulp = require('gulp'),
    minifyHtml = require("gulp-minify-html");
 
gulp.task('minify-html', function () {
    gulp.src('html/*.html') // Ҫѹ����html�ļ�
    .pipe(minifyHtml()) //ѹ��
    .pipe(gulp.dest('dist/html'));
});


var gulp = require('gulp'),
    jshint = require("gulp-jshint");
 
gulp.task('jsLint', function () {
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter()); // ��������
});

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //pngͼƬѹ�����

gulp.task('default', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //ʹ��pngquant��ѹ��pngͼƬ
        }))
        .pipe(gulp.dest('dist'));
});

gulp.watch('js/**/*.js', ['uglify','reload']);
var gulp = require('gulp'),
    //һЩgulp���,abcd��Щ����ֻ�������ٸ�����
    a = require('gulp-a'), 
    b = require('gulp-b'),
    c = require('gulp-c'),
    d = require('gulp-d'),
    e = require('gulp-e'),
    f = require('gulp-f'),
    g = require('gulp-g'),
    z = require('gulp-z');   

gulp.task('two',['one'],function(){
  console.log('two is done');
});