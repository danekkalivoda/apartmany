import autoprefixer from "autoprefixer";
import browserSync from "browser-sync";
import { spawn } from "child_process";
import cssnano from "cssnano";
import { dest, series, src, task, watch } from "gulp";
import gulpif from "gulp-if";
import postcss from "gulp-postcss";
import purgecss from "gulp-purgecss";
import sourcemaps from "gulp-sourcemaps";
import atimport from "postcss-import";
import tailwindcss from "tailwindcss";
import postcssPresetEnv from "postcss-preset-env";
import babel from "gulp-babel";
import webpack from 'webpack-stream';
import concat from "gulp-concat"


const rawStylesheet = "src/style.css";
const rawJs = "src/app.js";
const siteRoot = "_site";
const cssRoot = `${siteRoot}/assets/css/`;
const jsRoot = `${siteRoot}/assets/js/`;
const tailwindConfig = "tailwind.config.js";

const devBuild =
  (process.env.NODE_ENV || "development").trim().toLowerCase() ===
  "development";

// Fix for Windows compatibility
const jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

// Custom PurgeCSS Extractor
// https://github.com/FullHuman/purgecss
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

task("buildJekyll", () => {
  browserSync.notify("Building Jekyll site...");

  const args = ["exec", jekyll, "build"];

  if (devBuild) {
    args.push("--incremental");
  }

  return spawn("bundle", args, { stdio: "inherit" });
});

task("processJavascript", done => {
  browserSync.notify("Compiling javascript...");
  return src(rawJs)
    .pipe(webpack({
      output: {
        filename: 'app.js',
      },
      mode: 'production'
    }))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(dest(jsRoot));
});


task("processStyles", done => {
  browserSync.notify("Compiling styles...");

  return src(rawStylesheet)
    .pipe(
      postcss([atimport(), 
      postcssPresetEnv({
        stage: 0
      }), 
      tailwindcss(tailwindConfig)]))
    .pipe(gulpif(devBuild, sourcemaps.init()))
    .pipe(
      gulpif(
        !devBuild,
        new purgecss({
          content: ["_site/**/*.html", "src/**/*.js"],
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ["html", "js"]
            }
          ]
        })
      )
    )
    .pipe(gulpif(!devBuild, postcss([autoprefixer(), cssnano()])))
    .pipe(gulpif(devBuild, sourcemaps.write("")))
    .pipe(dest(cssRoot));
});

task("startServer", () => {
  browserSync.init({
    files: [siteRoot + "/**"],
    open: "local",
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  watch(
    [
      "**/*.css",
      "**/*.gif",
      "**/*.html",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.js",
      "**/*.md",
      "**/*.png",
      "**/*.yml",
      "!_site/**/*",
      "!node_modules"
    ],
    { interval: 500 },
    buildSite
  );
});

const buildSite = series("buildJekyll", "processStyles", "processJavascript");

exports.serve = series(buildSite, "startServer");
exports.default = series(buildSite);
