// http://stackoverflow.com/questions/21883245/using-jekyll-with-gulp-and-livereload

var gulp = require('gulp');
var refresh = require('gulp-livereload');
var watch = require('gulp-watch');
var lr = require('tiny-lr');
var server = lr();

gulp.task('jw', function(){
  var spawn = require('child_process').spawn,
    j     = spawn('bundle', ['exec', 'jekyll', 'serve', '--watch']);

  j.stdout.on('data', function (data) {
    console.log('stdout: ' + data); // works fine
  });

  watch({glob: '/home/sarunas/Desktop/saras/_site/*'}, function(files) {
    // update files in batch mode
    return files.pipe(refresh(server));
  });
});