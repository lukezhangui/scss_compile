#Standalone Gulp.js Scss compiler
Made with care by Luke Zhang (@lukezhangstudio)

## The Goal
Create a portable version of scss compiler using gulp-scss and gulp.js. This would be embeddable within larger web projects where native support for scss is unstable or non-existent (such as .Net MVC).

## Get started
- Double click the 'continously_build_scss.bat' and you're good to go
- For server builds, run the "build_scss_once.bat"
- In visual studios, go to tools -> external tools -> add the 'continously_build_scss.bat'. Now it's accessible via menu items

## How this works
- This uses a standalone build of NodeJS, NPM (Node package manager), and GulpJS to run Node-sass
- The css framework lives in the ./framework folder by default

## Configuration
- gulpfile.js is where the the scss compile tasks live
- Simply edit the input/output target variable at the top of the file to configure which files to compile

## Common errors
- SourceMap is a great feature that allows chrome inspector to figure out which scss file it actually came from. However, it libsass requires unix-style filepaths in order for it to work. Run the debug_build_no_sourcemap.bat to see what is the underlying error and fix it.
- Windows filenames too long. A known problem with node-modules on Windows because filenames are only 255char long in cmd.exe. Make sure the styles folder is not deeply nested in folders. If you are encountering this error, I suggest you look carefully at how you've mapped TFS directories, because visual studios suffers from the same bug.

## Future improvements
- GulpJS is very flexible and it should be used. Extending this tool to have other tasks that adds minification, autoprefixer, scss lint, would be a very very good idea.

## This is possible because of:
- Gulp.js
- Gulp-sass
- Node.exe binary
- NPM standalone. (can only be found in the dist source on node. Use the standalone copy to avoid needing globally installing NPM.)
