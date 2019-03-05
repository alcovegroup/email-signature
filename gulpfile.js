const data       = require('./data/corp-data.json'),
      gulp       = require('gulp'),
	  compilehbs = require('gulp-compile-handlebars'),
	  rename     = require('gulp-rename');


gulp.task('hbs', function(){
    data.employees.forEach(function(employee){
        gulp.src('./template/signature.hbs')
            .pipe(compilehbs(employee, {
                    ignorePartials: true,
                    helpers: {
                        either: function(arg1, arg2, options) {
                            if (arg1 || arg2) { return options.fn(this) }
                        }
                    }
                }))
            .pipe(rename(function (path) {
                path.basename = employee.filename;
                path.extname = ".html";
            }))
            .pipe(gulp.dest('./signatures'));
    });
});