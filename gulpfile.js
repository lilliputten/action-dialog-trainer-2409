const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename');
const prettify = require('gulp-html-prettify');

const buildInfo = require('./src/build-info.json');

function getBuildInfoText() {
  const {
    // prettier-ignore
    projectName,
    timestamp,
    version,
    currentTimeStr,
    gitCommitHash,
    gitBranch,
  } = buildInfo;
  return [
    'Project: ' + projectName,
    'Version: ' + version,
    'Branch: ' + gitBranch,
    'Commit: ' + gitCommitHash,
    'Fixed: ' + timestamp,
    'Built: ' + currentTimeStr,
  ].join('\n');
}

function prettifyHtml() {
  return gulp
    .src('build/**/*.html')
    .pipe(prettify({ indent_char: ' ', indent_size: 2 }))
    .pipe(gulp.dest('build'));
}

function writeBuildInfo(cb) {
  const buildInfoText = getBuildInfoText();
  // eslint-disable-next-line no-console
  console.log('Build info:\n' + buildInfoText);
  fs.writeFile('build/build.txt', buildInfoText, cb);
}

// TODO: Create a 'watch' task for these files?
function copyExtraFiles() {
  return gulp
    .src(['src/build-info.json'], { base: './' })
    .pipe(
      rename((path) => {
        if (path.dirname === 'src') {
          // NOTE: Put files from 'src' folder into the root of 'build' folder
          path.dirname = '';
        }
      }),
    )
    .pipe(gulp.dest('build/'));
}

gulp.task('writeBuildInfo', writeBuildInfo);
gulp.task('prettifyHtml', prettifyHtml); // NOTE: This patch can cause nextjs hydration error
gulp.task('copyExtraFiles', copyExtraFiles);

const patchBuildTasks = [
  'writeBuildInfo',
  'prettifyHtml',
  'copyExtraFiles', // TODO: Use it to provide extra stuff to the 'build' folder
].filter(Boolean);

gulp.task('patchBuild', gulp.parallel.apply(gulp, patchBuildTasks));
