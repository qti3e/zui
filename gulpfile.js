const gulp = require("gulp");
const rollup = require("gulp-better-rollup");
const rename = require("gulp-rename");
const typescript = require("rollup-plugin-typescript");
const resolve = require("rollup-plugin-node-resolve");
const tscc = require("@tscc/rollup-plugin-tscc").default;

gulp.task("build:js", function() {
  const rollupOptions = {
    external: [],
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      typescript({
        target: "esnext",
        module: "ESNext"
      })
    ]
  };

  return gulp
    .src("./zeus/main.ts")
    .pipe(rollup(rollupOptions, "cjs"))
    .pipe(rename("zeus.js"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("build:html", function() {
  return gulp.src("./html/rollup.html").pipe(rename("index.html")).pipe(gulp.dest("./dist"));
});

gulp.task("build", gulp.series("build:js", "build:html"));

gulp.task("zui", function() {
  const rollupOptions = {
    external: [],
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      typescript({
        target: "esnext",
        module: "ESNext"
      })
    ]
  };

  return gulp
    .src("./zui/index.ts")
    .pipe(rollup(rollupOptions, "cjs"))
    .pipe(rename("zui.js"))
    .pipe(gulp.dest("./dist"));
});
