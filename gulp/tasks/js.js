import webpack from "webpack-stream";
import sourcemaps from "gulp-sourcemaps";
import gulpIf from "gulp-if";

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { soursemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "app.min.js",
        },
      })
    )
    .pipe(gulpIf(!app.isBuild, sourcemaps.write()))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
