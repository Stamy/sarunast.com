var gulp = require('gulp');
var connect = require('gulp-connect');
var run = require('gulp-run');

var refresh = require('gulp-livereload');
var watch = require('gulp-watch');
var lr = require('tiny-lr');
var server = lr();

// http://stackoverflow.com/questions/21883245/using-jekyll-with-gulp-and-livereload
// Uses the jekyll as a server and reload
// then run livereload after files were changed
gulp.task('server', function(){
  var spawn = require('child_process').spawn,
    j = spawn('bundle', ['exec', 'jekyll', 'build', '-w']);

  j.stdout.on('data', function (data) {
    console.log('stdout: ' + data); // works fine
  });

  watch({glob: '_site/**/*'}, function(files) {
    // update files in batch mode
    return files.pipe(refresh(server));
  });
});


// Uses the 'exec jekyll build' on reload the livereload
gulp.task('server2', function(){
  run("bundle exec jekyll build").exec();
  connect.server({
    root: '_site',
    port: 9000,
    livereload: true
  });
  console.log('Server running at http://localhost:9000/');
  gulp.watch('_posts/*', function(event){
    console.log(event.path + ' ' + event.type + ', rebuilding...');
    gulp.src('')
      .pipe(run("bundle exec jekyll build").exec())
      .pipe(connect.reload());
  });
});

