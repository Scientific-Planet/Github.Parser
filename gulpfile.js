const gulp = require("gulp");
const lint = require("gulp-tslint");
const typescript = require("gulp-typescript");
const sequence = require("run-sequence");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const istanbul = require("gulp-istanbul");
const mocha = require("gulp-mocha");

// ***************************************************************************
// * LINT
// ***************************************************************************
gulp.task("lint.source", () => 
   gulp.src("source/entities/*.ts")
       .pipe(lint({
           formatter: "verbose"
       }))
       .pipe(lint.report()) 
);

gulp.task("lint", ["lint.source"]);

// ***************************************************************************
// * BUILD
// ***************************************************************************
gulp.task("build.source", () =>
    gulp.src([
            "source/**/**.ts",
            "source/interfaces/interfaces.d.ts",
            "typings/index.d.ts"
        ])
        .pipe(typescript(typescript.createProject("tsconfig.json")))
        .js.pipe(gulp.dest("source/"))    
);

gulp.task("build.test", () => 
    gulp.src([
            "test/**/**.ts",
            "source/interfaces/interfaces.d.ts",
            "typings/index.d.ts"
        ])
        .pipe(typescript(typescript.createProject("tsconfig.json")))
        .js.pipe(gulp.dest("test/"))
);

gulp.task("build.dts", () => 
    gulp.src("source/entities/*.ts")
        .pipe(typescript(typescript.createProject("tsconfig.json", { outFile: "index.js"})))
        .dts.pipe(gulp.dest("dist/"))
);

gulp.task("build", (done) => 
    sequence("build.source","build.dts", "build.test", done)
);

// ***************************************************************************
// * TEST
// ***************************************************************************
gulp.task("test.coverage", () =>
    gulp.src([
        'source/**/*.js'
    ])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
);

gulp.task("test.mocha", () => 
   gulp.src('./test/*.js', {read: false})
       .pipe(mocha({reporter: 'spec'}))
       .pipe(istanbul.writeReports({dir: './analysis/coverage'})) 
);

gulp.task("test", (done) =>
    sequence("build","test.coverage", "test.mocha", done)
);

// ***************************************************************************
// * BUNDLE
// ***************************************************************************
gulp.task("bundle", () =>
    browserify({
        debug: true,
        standalone : "list"
    })
    .add("source/index.js")
    .bundle()
    .pipe(source("index.min.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist/"))
);
